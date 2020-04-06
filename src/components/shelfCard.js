import React from 'react';
import styled from 'styled-components';

const CardWrapper = styled.li`
  width: 9rem;
  height: 13rem;
`;

const BookCover = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center center;
  border-radius: 5px;
`;

const BookDetails = styled.div`
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0.5);
  text-align: center;
  padding: 1rem;
  display: none;

  ${CardWrapper}:hover & {
    display: block;
  }
`;

const Title = styled.h3``;
const Author = styled.p``;
const Link = styled.a``;


const ShelfCard = ({ title, authors, cover, infoLink }) => {
  return ( 
    <CardWrapper>
      <div>
        <BookCover
          src={cover}
          alt="book cover" />
      </div>
      <BookDetails>
        <Title>{title}</Title>
        <Author>By: {authors}</Author>
        <Link href={infoLink}>Read</Link>
      </BookDetails>
    </CardWrapper>
   );
}
 
export default ShelfCard;


