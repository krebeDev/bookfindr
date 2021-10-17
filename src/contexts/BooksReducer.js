export const ADD_BOOKS = 'BOOKS/ADD_BOOKS'
export const SET_ERROR = 'BOOKS/SET_ERROR'
export const SET_IS_FETCHING = 'BOOKS/SET_IS_FETCHING'
export const ADD_TO_SHELF = 'BOOKS/ADD_TO_SHELF'
export const GET_SHELF_BOOKS = 'BOOKS/GET_SHELF_BOOKS'
export const RESET = 'BOOKS/RESET'
export const DELETE_SHELF_ITEM = 'BOOKS/DELETE_SHELF_ITEM'

export const initializer = (initialState) => {
  const shelf = JSON.parse(localStorage.getItem('shelf'))
  if (shelf) return { ...initialState, shelf: shelf }
  return initialState
}

const BooksReducer = (state, action) => {
  switch (action.type) {
    case SET_IS_FETCHING:
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

    case RESET:
      return {
        ...state,
        ...action.payload,
      }

    case SET_ERROR:
      return {
        ...state,
        error: action.payload,
        isFetching: false,
      }

    case ADD_TO_SHELF:
      return {
        ...state,
        shelf: state.shelf.concat(action.payload),
      }

    case DELETE_SHELF_ITEM:
      const remainingBooks = state.shelf.filter(
        (book) => book.id !== action.payload
      )
      return {
        ...state,
        shelf: remainingBooks,
      }

    default:
      return state
  }
}

export default BooksReducer
