import React, { useContext, useState } from 'react'
import { BooksContext } from '../../contexts/BooksContext'
import styledComponents from './styles'

const { StyledCard, Summary, Info, BookCover, ButtonGroup, AddButton } =
  styledComponents

const BookCard = (props) => {
  const [isAdded, setIsAdded] = useState(false)
  const { title, cover, authors, infoLink, id, summary, inShelf, year } =
    props.book
  const { addToShelf } = useContext(BooksContext)

  return (
    <StyledCard>
      <a href={infoLink} target='_blank' rel='noopener noreferrer'>
        <BookCover src={cover} alt={title} />
      </a>
      <Summary>
        <Info>
          <h3>
            <a href={infoLink} target='_blank' rel='noopener noreferrer'>
              {title} &#x2197;
            </a>
          </h3>
          <p>
            {authors} | {year}
          </p>
          <p>{summary}</p>
        </Info>

        <ButtonGroup>
          <AddButton
            disabled={inShelf || isAdded}
            onClick={() => {
              addToShelf(id)
              setIsAdded(true)
            }}
          >
            Add to Shelf
          </AddButton>
        </ButtonGroup>
      </Summary>
    </StyledCard>
  )
}

export default BookCard
