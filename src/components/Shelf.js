import React from 'react';
import styled from 'styled-components';
import ShelfCard from './shelfCard';

const ShelfItems = styled.ul`
  max-width: 1200px;
  margin: auto;
  display: flex;
  flex-wrap: wrap;
  list-style-type: none;
  justify-content: space-around;
  align-items: center;
  padding: 0;
`;


const Shelf = ({ userShelf }) => {
  return ( 
    <ShelfItems>
      {userShelf.map(book => (
        <ShelfCard key={book.id}
          cover={ book.cover }
          title={ book.title }
          author={ book.authors }
          infoLink={ book.infoLink }
          />
      ))}
    </ShelfItems>
   );
}
 
export default Shelf;