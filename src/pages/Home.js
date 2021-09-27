import React, { useReducer, useEffect } from 'react'
import styled from 'styled-components'
import BookCard from '../components/BookCard'
import SearchForm from '../components/SearchForm'
import Container from '../components/ui/Container'
import breakpoints from '../commons/breakpoints'
import fetchBooks from './../utils/fetchBooks'
import booksReducer from './../store/reducers'
import { ADD_BOOKS, SEARCH_BOOKS } from '../store/actions'

const FormBox = styled.div`
  padding: 3rem 1rem;
  background: ${({ theme }) => theme.baseGreen};
  border-radius: 1rem;
  position: relative;
  overflow: hidden;

  & > h1 {
    color: ${({ theme }) => theme.veryLightGreen};
    margin-bottom: 1.2rem;
    text-align: center;
  }

  &::before {
    content: '';
    width: 6rem;
    height: 6rem;
    background: ${({ theme }) => theme.lightGreen};
    opacity: 0.3;
    position: absolute;
    bottom: -3.5rem;
    left: -3.5rem;
    border-radius: 50%;
  }

  &::after {
    content: '';
    width: 7rem;
    height: 7rem;
    background: ${({ theme }) => theme.lightGreen};
    opacity: 0.3;
    position: absolute;
    top: -3.5rem;
    right: -3.5rem;
    border-radius: 50%;
  }

  @media ${breakpoints.device.tablet} {
    &::before {
      width: 10rem;
      height: 10rem;
    }

    &::after {
      width: 10rem;
      height: 10rem;
    }
  }
`

const SearchResult = styled.div`
  background: ${({ theme }) => theme.white};
  border-radius: 0.5rem;
  margin-top: 1.5rem;
  padding: 1rem;
  
  @media ${breakpoints.device.tablet} {
    padding: 2rem;
  }
}
`

const Title = styled.h2`
  display: flex;
  align-items: center;

  & :nth-child(2) {
    flex: 1;
    height: 3px;
    border-radius: 0.5rem;
    margin-left: 1rem;
    background: ${({ theme }) => theme.lightGreen};
    margin-top: 7px;
  }

  @media ${breakpoints.device.tablet} {
    & :nth-child(2) {
      height: 6px;
    }
  }
`

const BookCards = styled.ul`
  display: flex;
  margin: 1rem auto;
  flex-direction: column;

  @media ${breakpoints.device.tablet} {
    justify-content: space-around;
    flex-direction: row;
    flex-wrap: wrap;
  }
`

const LoadMoreButton = styled.button`
  padding: 1rem 2rem;
  background: ${({ theme }) => theme.baseGreen};
  color: ${({ theme }) => theme.veryLightGreen};
  border-radius: 5px;
  font-size: 1rem;

  &:disabled {
    background: grey;
    cursor: default;
  }
`

const Navigation = styled.div`
  text-align: center;
  & > p {
    margin-bottom: 1rem;
  }
`

const HomePage = () => {
  const initialState = {
    books: [],
    searchTerm: '',
    startIndex: 0,
    isFetching: false,
    totalItems: 0,
    error: '',
  }
  const [state, dispatch] = useReducer(booksReducer, initialState)

  const renderBooks = state.books.map(
    ({ title, cover, authors, publisher, infoLink, id }) => (
      <BookCard
        key={id}
        {...{ title, cover, authors, publisher, infoLink, id }}
      />
    )
  )

  const handleSearch = (searchTerm) => {
    fetchBooks(searchTerm, 0, SEARCH_BOOKS, dispatch)
  }

  const handleLoadMore = () => {
    const { searchTerm, startIndex } = state
    fetchBooks(searchTerm, startIndex, ADD_BOOKS, dispatch)
  }

  useEffect(() => {
    fetchBooks('all', 0, ADD_BOOKS, dispatch)
  }, [])

  const restultTitle =
    state.searchTerm === 'all'
      ? 'Latest releases'
      : `Results for "${state.searchTerm}"`

  const resultStatus = `Showing ${
    state.startIndex > state.totalItems ? state.totalItems : state.startIndex
  } of ${state.totalItems} results`

  return (
    <section>
      <Container>
        <FormBox>
          <h1>Find &amp; organize your favorite books</h1>
          <SearchForm handleSearch={handleSearch} />
        </FormBox>
        <SearchResult>
          <Title>
            <span>{restultTitle}</span>
            <span aria-hidden='true' />
          </Title>
          {state.error && <p>Error </p>}
          {!state.error && <BookCards>{renderBooks}</BookCards>}
          {state.isFetching && <p>Fecthing books...</p>}
          {!state.isFetching && (
            <Navigation>
              <p>{resultStatus}</p>
              {state.totalItems > 10 && (
                <LoadMoreButton
                  type='button'
                  onClick={handleLoadMore}
                  disabled={state.startIndex >= state.totalItems}
                >
                  Load More
                </LoadMoreButton>
              )}
            </Navigation>
          )}
        </SearchResult>
      </Container>
    </section>
  )
}

export default HomePage
