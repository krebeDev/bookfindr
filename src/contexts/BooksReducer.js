export const ADD_BOOKS = 'BOOKS/ADD_BOOKS'
export const BOOKS_ERROR = 'BOOKS/HAS_ERROR'
export const IS_FETCHING = 'IS_FETCHING'
export const ADD_SHELF = 'ADD_SHELF'
export const GET_SHELF = 'BOOKS/GET_SHELF'

export const initializer = (initialState) => {
  const shelf = JSON.parse(localStorage.getItem('shelf'))
  if (shelf) return { ...initialState, shelf: shelf }
  return initialState
}

const BooksReducer = (state, action) => {
  switch (action.type) {
    case IS_FETCHING:
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

    case BOOKS_ERROR:
      return {
        ...state,
        error: action.payload.error.message,
        isFetching: false,
      }

    case ADD_SHELF:
      return {
        ...state,
        shelf: state.shelf.concat(action.payload),
      }

    default:
      return state
  }
}

export default BooksReducer
