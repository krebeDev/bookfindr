import { ADD_BOOKS, SEARCH_BOOKS, BOOKS_FETCHING, BOOKS_ERROR } from './actions'

const booksReducer = (state, action) => {
  switch (action.type) {
    case BOOKS_FETCHING:
      return { ...state, isFetching: action.payload }
    case ADD_BOOKS:
      return {
        ...state,
        books: state.books.concat(action.payload.books),
        searchTerm: action.payload.searchQuery,
        startIndex: (state.startIndex += 10),
        totalItems: action.payload.totalItems,
        isFetching: false,
      }

    case SEARCH_BOOKS:
      return {
        ...state,
        books: action.payload.books,
        searchTerm: action.payload.searchQuery,
        totalItems: action.payload.totalItems,
      }

    case BOOKS_ERROR:
      return {
        ...state,
        error: action.payload.error.message,
        isFetching: false,
      }

    default:
      return state
  }
}

export default booksReducer
