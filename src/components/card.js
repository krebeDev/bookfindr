import React from 'react';
import styled from 'styled-components';

const BookDetails = styled.li`
    width: 22rem;
    height: 19rem;
    display: flex;
    background: #f8f8f8;
    padding: 1rem 1rem 2rem;
    margin: 2rem 1rem;
    box-shadow: 1px 1px 5px #c0bebe;
    overflow: none;
    transiton: transform 0.5s ease-out;
    border-radius: 10px;

    &:hover {
      transform: scale(1.1);
    }

    @media(min-width: 414px) {
    height: 17rem;
      
    }
  `;

  const ThumbnailWrapper = styled.div`
    flex-basis: 40%;
    margin: -2rem 1rem 0 0;
    `; 
  
  const BookThumbnail = styled.img`
    box-shadow: 3px 3px 8px -1px rgba( 15, 15, 15, .5 ), -3px 3px 8px -1px rgba( 15, 15, 15, .5 );
    width: 7rem;
    height: 11rem;
    object-fit: cover;
    object-position: center center;
    border-radius: 5px;
    `;

  const BookInfo = styled.div`
    display: flex;
    flex-direction: column;
    height: 100%;
    `;

  const InfoSummary = styled.div`
    > * {
          display: -webkit-box;
          -webkit-line-clamp: 3;
          -webkit-box-orient: vertical;  
          overflow: hidden;  
    }
  `;

  const BookTitle = styled.h2`
    line-height: 1.3;
    font-size: 1.3rem;
    margin-bottom: 0.5rem; 
    `;

  const LinkWrapper = styled.div`
    margin-top: auto;
    `;

  const InfoLink = styled.a`
    background: #448026;
    padding: 0.5rem 1.2rem;
    color: #f8f8f8;
    border-radius: 10px;
    text-decoration: none;

    @media(min-width: 414px) {
    padding: 0.5rem 2.5rem;

    }
    `;
  

const Card = ({ title, imageLink, authors, publisher, infoLink }) => {
  return ( 
    <BookDetails>
      <ThumbnailWrapper>
        <BookThumbnail src={ imageLink } alt="Book cover"/>
      </ThumbnailWrapper>
      <div>
        <BookInfo>
          <InfoSummary>
            <BookTitle>{ title }</BookTitle>
            <p>By: { authors }</p>
            <p>Published By: { publisher }</p>
          </InfoSummary>
          <LinkWrapper>
            <InfoLink 
              href={ infoLink }
              target="_blank">See this Book
            </InfoLink> 
          </LinkWrapper>
        </BookInfo>
      </div>
    </BookDetails>
   );
}
export default Card;