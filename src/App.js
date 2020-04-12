import React, { Component } from 'react';
import { googleBooksApi, fixedParams, apiKey } from './../src/config.json';
import { ThemeProvider } from 'styled-components'
import GlobalStyle, { darkTheme, lightTheme } from './theme/globalStyles';
import ErrorBoundary from './components/errorBoundary';
import Header from './components/header';
import ErrorBox from './components/errorMessage';
import Results from './components/results';
import Footer from './components/footer';
import { getBookDetails } from './components/utilities/utils';
import Shelf from './components/Shelf';

class App extends Component {
  state = {
    books: [],
    totalItems: 0,
    searchParameters: {
      searchTerm: 'programming',
      startIndex: 0,
    },
    error: {},
    userShelf: [],
    theme: lightTheme,
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
            throw new URIError('No results found. Provide a valid term');
          } else if (data.error || data.totalItems === undefined) {
            throw new Error('Network problem, try again after some time');
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
    this.fetchBooks();
  }

  // componentDidUpdate(prevProps) {
  //   let userShelf;
  //   if (this.state.books.length > 1) {
  //      userShelf = localStorage.getItem("userShelf")
  //        ? JSON.parse(localStorage.getItem("userSelf"))
  //        : [];
  //      this.setState({ userShelf });
  //   }
  // }

  handleSearch = async searchQuery => {
    const searchParameters = { ...this.state.searchParameters };
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

  handleThemeChange = () => {
    let theme = this.state.theme;
    theme = theme === lightTheme ? darkTheme : lightTheme;
    this.setState({ theme });
  }

  handleAddToShelf = (bookId) => { 
    const books = [...this.state.books];
    let userShelf;
    const addedBook = books.filter(b => b.etag === bookId);
    userShelf = localStorage.getItem('userShelf')
      ? JSON.parse(localStorage.getItem('userShelf'))
      : [];
    userShelf.push(getBookDetails(addedBook[0].volumeInfo));
    localStorage.setItem('userShelf', JSON.stringify(userShelf))
  }

  render() { 
    const { error, searchParameters, books, totalItems, theme, userShelf } = this.state;
    return (
      <ThemeProvider theme={this.state.theme}>
        <GlobalStyle />
        <ErrorBoundary>
          <Header
            onSearch={this.handleSearch}
            onThemeChange={this.handleThemeChange}
            theme={theme}
          />
          <main>
            {error.name ? (
              <ErrorBox error={error} onOK={this.resetAll} />
            ) : (
              <Results
                searchParameters={searchParameters}
                books={books}
                onNextPage={this.getNextPage}
                onPrevPage={this.goToPrevPage}
                totalItems={totalItems}
                onAddToShelf={this.handleAddToShelf}
              />
            )}
          </main>
          {/* {userShelf && <Shelf userShelf={userShelf} />} */}
        </ErrorBoundary>
        <Footer />
      </ThemeProvider>
    );
  }
}
 
export default App;