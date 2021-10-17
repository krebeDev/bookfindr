import React, { createContext, useReducer, useEffect } from 'react'
import { getBookDetails } from '../commons/utilities'
import { googleBooksApi, fixedParams, apiKey } from './../config.json'
import BooksReducer, {
  initializer,
  SET_ERROR,
  SET_IS_FETCHING,
  ADD_BOOKS,
  ADD_TO_SHELF,
  RESET,
  DELETE_SHELF_ITEM,
} from './BooksReducer'

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

  const fetchBooks = async (searchTerm, startIndex) => {
    const shelfBooksIds = state.shelf.map(({ id }) => id)
    try {
      const response = await fetch(
        `${googleBooksApi}${searchTerm}${fixedParams}${startIndex}&key=${apiKey}`
      )
      const data = await response.json()
      if (data.totalItems === 0)
        throw new Error(`No records found for: "${searchTerm}"`)

      const transformedBooks = getBookDetails(data, shelfBooksIds)
      dispatch({
        type: ADD_BOOKS,
        payload: {
          books: transformedBooks,
          searchQuery: searchTerm,
          totalItems: data.totalItems,
        },
      })
    } catch (error) {
      dispatch({
        type: SET_ERROR,
        payload: /no records/i.test(error.message)
          ? error.message
          : 'Unable to fetch books. Please refresh the page.',
      })
    } finally {
      dispatch({ type: SET_IS_FETCHING, payload: false })
    }
  }

  const addToShelf = (id) => {
    const savedBook = state.books.find((book) => book.id === id)
    dispatch({ type: ADD_TO_SHELF, payload: savedBook })
  }

  const resetBooks = () => {
    dispatch({ type: RESET, payload: initializer(initialState) })
  }

  const deleteFromShelf = (bookId) => {
    dispatch({ type: DELETE_SHELF_ITEM, payload: bookId })
  }

  const getBookFromShelf = (bookId) => {
    const book = state.shelf.find((book) => book.id === bookId)
    return book
  }

  useEffect(() => {
    localStorage.setItem('shelf', JSON.stringify(state.shelf))
  }, [state.shelf])

  return (
    <BooksContext.Provider
      value={{
        state,
        fetchBooks,
        addToShelf,
        resetBooks,
        getBookFromShelf,
        deleteFromShelf,
      }}
    >
      {children}
    </BooksContext.Provider>
  )
}

export default BooksContextProvider
