import React, { Component } from 'react';
import styled from 'styled-components';
import Card from './../components/card';
import Navigation from './../components/navigation';
import defaultCover from './../assets/default-cover.png';

const ResultSection = styled.section`
  max-width: 1200px;
  margin: auto;
  padding: 3rem 1rem;
`;

const BookLists = styled.ul`
    display: flex;
    flex-wrap: wrap;
    list-style-type: none;
    justify-content: space-around;
    align-items: center;
    padding: 0;
    `;

class Results extends Component {
  getThumbnail = (volumeInfo) => {
    return volumeInfo.imageLinks ? 
      volumeInfo.imageLinks.thumbnail.replace('http://', 'https://') : defaultCover;
  }

  getAuthors = (volumeInfo) => volumeInfo.authors ? volumeInfo.authors : 'No authors found';
  
  getPublisher = (volumeInfo) => volumeInfo.publisher ? volumeInfo.publisher : 'No publisher found';

  render() { 
    const { books, totalItems, onNextPage, onPrevPage } = this.props;    
    return ( 
        <ResultSection>
          <BookLists>
              {books.map(book => 
                <Card 
                  key={ book.etag }
                  title={ book.volumeInfo.title }
                  authors={ this.getAuthors(book.volumeInfo) }
                  publisher={ this.getPublisher(book.volumeInfo) }
                  infoLink={ book.volumeInfo.infoLink }
                  imageLink={ this.getThumbnail(book.volumeInfo) }   
                />
              )}
            </BookLists>
            {totalItems > 12 && 
              <Navigation 
                onNextPage={ onNextPage }
                onPrevPage={ onPrevPage } 
              />
            }
        </ResultSection>      
     );
  }
}
 
export default Results;