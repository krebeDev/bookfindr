import React from 'react';
import styled from 'styled-components';
import Card from './../components/card';
import Navigation from './../components/navigation';
import { getPublisher, getAuthors, getThumbnail } from './utilities/utils';

const ResultSection = styled.section`
  padding-top: 3rem;
`;

const BookLists = styled.ul`
    max-width: 1200px;
    margin: auto;
    display: flex;
    flex-wrap: wrap;
    list-style-type: none;
    justify-content: space-evenly;
    align-items: center;
    padding: 0;
  `;

const Results = ({ books, totalItems, onNextPage, onPrevPage, onAddToShelf }) => {
  return (
    <ResultSection>
      <BookLists>
        {books.map(book => (
          <Card
            key={book.etag}
            id={book.etag}
            title={book.volumeInfo.title}
            authors={getAuthors(book.volumeInfo)}
            publisher={getPublisher(book.volumeInfo)}
            infoLink={book.volumeInfo.infoLink}
            imageLink={getThumbnail(book.volumeInfo)}
            onAddToShelf={onAddToShelf}
          />
        ))}
      </BookLists>
      {totalItems > 12 && (
        <Navigation onNextPage={onNextPage} onPrevPage={onPrevPage} />
      )}
    </ResultSection>
  );
}
 
export default Results;