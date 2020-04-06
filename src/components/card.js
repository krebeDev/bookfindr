import React from 'react';
import styled, { keyframes } from 'styled-components';
import addIcon from './../assets/add-shelf.svg'


const scaleOne = keyframes`
  100% { 
    transform: scale(1.1);
  }
  
`;

const BookDetails = styled.li`
  width: 22rem;
  height: 19rem;
  display: flex;
  background-color: ${props => props.theme.secondary};
  padding: 1rem 1rem 2rem;
  margin: 2rem 1rem;
  box-shadow: 1px 1px 5px ${props => props.theme.grey};
  overflow: none;
  border-radius: 10px;

  &:hover {
    animation: ${scaleOne} 0.3s forwards;
  }

  @media (min-width: 414px) {
    height: 17rem;
  }
`;

  const ThumbnailWrapper = styled.div`
    flex-basis: 40%;
    margin: -2rem 1rem 0 0;
  `; 
  
  const BookThumbnail = styled.img`
    box-shadow: 3px 3px 8px -1px ${props => props.theme.grey},
      -3px 3px 8px -1px ${props => props.theme.grey};
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
    background: ${props => props.theme.primary};
    padding: 0.5rem 1.2rem;
    color: ${props => props.theme.textColorLight};
    border-radius: 10px;
    text-decoration: none;

    &:hover {
      opacity: 0.9;
    }

    @media (min-width: 414px) {
      padding: 0.5rem 2.5rem;
    }
  `;

    const AddBtn = styled.button`
      background-image: url(${addIcon});
      padding: 0.5rem 0.8rem;
      margin: 3.25rem auto;
      background: #bfe3b7;
      border: none;
      border-radius: 10px;
      color: ${props => props.theme.darkGreen};
      cursor: pointer;

      @media (min-width: 768px) {
        display: none;
        transition: visibility 1s linear;

        ${BookDetails}:hover & {
          display: inline-block;
        }
      }
    `;
 
const Card = ({ title, imageLink, authors, publisher, infoLink, onAddToShelf, id }) => {
  return (
    <BookDetails>
      <ThumbnailWrapper>
        <BookThumbnail src={imageLink} alt="Book cover" />
        <AddBtn onClick={ () => onAddToShelf(id) }> &#43; Add to shelf</AddBtn>
      </ThumbnailWrapper>
      <div>
        <BookInfo>
          <InfoSummary>
            <BookTitle>{title}</BookTitle>
            <p>By: {authors}</p>
            <p>Published By: {publisher}</p>
          </InfoSummary>
          <LinkWrapper>
            <InfoLink href={infoLink} target="_blank">
              See this Book
            </InfoLink>
          </LinkWrapper>
        </BookInfo>
      </div>
    </BookDetails>
  );
}
export default Card;