
import React, { Component } from 'react';
import { googleBooksApi, fixedParams, apiKey } from './../src/config.json'
import Header from './components/header';
import Footer from './components/footer';
import ErrorBoundary from './components/errorBoundary';
import Results from './components/results';
import ErrorBox from './components/errorMessage';

class App extends Component {
  state = {
    books: [],
    totalItems: 0,
    searchParameters: {
      searchTerm: 'programming',
      startIndex: 0,
    },
    error: {},
  }

  fetchBooks = () => {
    const { startIndex: index, searchTerm } = this.state.searchParameters;
    let controller = new AbortController();
    setTimeout(() => controller.abort(), 2000);

    try {
      if (searchTerm === null) {
        throw new Error('Please provide a search term in the input box');
      }
      fetch(`${googleBooksApi}${searchTerm}${fixedParams}${index}&key=${apiKey}`, {
        signal: controller.signal
      }).then(res => res.json())
          .then(data => {
            if (data.totalItems === 0) {
              throw new URIError ('No results found. Provide a valid term');
            } else if (data.error || data.totalItems === undefined) {
              throw new Error ('Network problem, try again after some time');
            } else {
              this.setState({ books: data.items, totalItems: data.totalItems });
            }
          }).catch(error => {
            this.setState({ error });
          })      
    } catch (error) {
      this.setState({ error });
    } finally {
      clearTimeout(setTimeout);
    }
  }

  componentDidMount() {
    this.fetchBooks()
  }

  handleSearch = async searchQuery => {
    const searchParameters = {...this.state.searchParameters };
    searchParameters.searchTerm = searchQuery;
    await this.setState({ searchParameters });
    this.fetchBooks();
  }

  getNextPage = async () => {
    const searchParameters = { ...this.state.searchParameters };

    try {
      if (searchParameters.startIndex <= this.state.totalItems) {
        searchParameters.startIndex += 12;
        await this.setState({ searchParameters });
        this.fetchBooks();
      } else {
        throw new Error('You\'ve hit the end of the web :)');
      }
      
    } catch (error) {
      this.setState({ error });
    }
  }

  resetAll = () => {
    this.setState({
      books: [],
      totalItems: 0,
      searchParameters: {
      searchTerm: null,
      startIndex: 0,
    },
    error: {},
    });
  }

   goToPrevPage = () => {
    console.log('previous'); // Implementation with React Router in progress
  }

  render() { 
    const { error, searchParameters, books, totalItems } = this.state;
    return ( 
      <>
        <ErrorBoundary>
          <Header 
            onSearch={ this.handleSearch } 
          />
          <main>
            {error.name ? 
              <ErrorBox 
                error={ error }
                onOK={ this.resetAll }/> : 
              <Results 
                searchParameters = { searchParameters }
                books={ books }
                onNextPage={ this.getNextPage }
                onPrevPage={ this.goToPrevPage }
                totalItems={ totalItems }
                />
            }
          </main>
        </ErrorBoundary>
        <Footer />
      </>
     );
  }
}
 
export default App;