import getBookDetails from './getBookDetails'
import { googleBooksApi, fixedParams, apiKey } from './../config.json'
import { BOOKS_ERROR } from '../store/actions'

const fetchBooks = (searchTerm, startIndex, actionType, dispatch) => {
  fetch(
    `${googleBooksApi}${searchTerm}${fixedParams}${startIndex}&key=${apiKey}`
  )
    .then((response) => response.json())
    .then((data) => {
      if (data.error) {
        throw new Error({
          message: 'Aw snap! Something broke. Please try again',
        })
      }
      const transformedBooks = getBookDetails(data)
      dispatch({
        type: actionType,
        payload: {
          books: transformedBooks,
          searchQuery: searchTerm,
          totalItems: data.totalItems,
        },
      })
    })
    .catch((error) => {
      dispatch({ type: BOOKS_ERROR, payload: error })
    })
  // .finally(() => {
  //   dispatch({ type: BOOKS_FETCHING, payload: false })
  // })
}

export default fetchBooks
