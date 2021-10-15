import React, { useContext } from 'react'
import styled from 'styled-components'
import { BooksContext } from '../contexts/BooksContext'
import breakpoints from '../commons/breakpoints'
import BookCard from './BookCard'

const StyledBookCards = styled.ul`
  display: flex;
  margin: 1rem auto;
  flex-direction: column;

  @media ${breakpoints.device.tablet} {
    justify-content: space-around;
    flex-direction: column;
    flex-wrap: wrap;
  }
`

const BookCards = () => {
  const { state } = useContext(BooksContext)
  const renderBooks = state.books.map((book) => (
    <BookCard key={book.id} book={book} />
  ))

  return <StyledBookCards>{renderBooks}</StyledBookCards>
}

export default BookCards
