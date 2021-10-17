import React, { useContext } from 'react'
import { BooksContext } from './../../contexts/BooksContext'
import BookCard from './../BookCard/index'
import StyledBookCards from './styles'

const BookCards = () => {
  const { state } = useContext(BooksContext)
  const renderBooks = state.books.map((book, index) => (
    <BookCard key={book.id + index} book={book} />
  ))

  return <StyledBookCards>{renderBooks}</StyledBookCards>
}

export default BookCards
