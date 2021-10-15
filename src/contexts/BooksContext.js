import React, { createContext, useReducer, useEffect } from 'react'
import BooksReducer, { ADD_SHELF } from './BooksReducer'
import {
  BOOKS_ERROR,
  IS_FETCHING,
  ADD_BOOKS,
  initializer,
} from './BooksReducer'
import { googleBooksApi, fixedParams, apiKey } from './../config.json'
import getBookDetails from './../utils/getBookDetails'

export const BooksContext = createContext()

const initialState = {
  books: [],
  searchTerm: '',
  startIndex: 0,
  isFetching: true,
  totalItems: 0,
  error: '',
  shelf: [],
}

const BooksContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(BooksReducer, initialState, initializer)

  const fetchBooks = async (searchTerm, startIndex, actionType) => {
    // dispatch({ type: IS_FETCHING, payload: true })
    try {
      const response = await fetch(
        `${googleBooksApi}${searchTerm}${fixedParams}${startIndex}&key=${apiKey}`
      )
      const data = await response.json()
      const transformedBooks = getBookDetails(data)
      dispatch({
        type: actionType,
        payload: {
          books: transformedBooks,
          searchQuery: searchTerm,
          totalItems: data.totalItems,
        },
      })
    } catch (error) {
      dispatch({
        type: BOOKS_ERROR,
        payload: 'Error fetching books. Please refresh the page',
      })
    } finally {
      dispatch({ type: IS_FETCHING, payload: false })
    }
  }

  const addToShelf = (id) => {
    const savedBook = state.books.find((book) => book.id === id)
    dispatch({ type: ADD_SHELF, payload: savedBook })
  }

  useEffect(() => {
    localStorage.setItem('shelf', JSON.stringify(state.shelf))
  }, [state.shelf])

  return (
    <BooksContext.Provider value={{ state, fetchBooks, addToShelf }}>
      {children}
    </BooksContext.Provider>
  )
}

export default BooksContextProvider
