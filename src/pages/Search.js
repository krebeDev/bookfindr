import React, { useContext, useEffect } from 'react'
import styled from 'styled-components'
import { BooksContext } from '../contexts/BooksContext'
import { ADD_BOOKS } from '../contexts/BooksReducer'
import breakpoints from '../commons/breakpoints'
import BookCards from '../components/BookCards'
import Container from '../components/ui/Container'

const StyledSearch = styled.section`
  background: ${({ theme }) => theme.white};
  border-radius: 0.5rem;
  margin-top: 1.5rem;
  padding: 1rem;
  
  @media ${breakpoints.device.tablet} {
    padding: 2rem;
  }
}`

const LoadMoreButton = styled.button`
  padding: 1rem 3rem;
  background: ${({ theme }) => theme.baseGreen};
  color: ${({ theme }) => theme.veryLightGreen};
  border-radius: 2rem;
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

const Search = ({ location: { search } }) => {
  const { state, fetchBooks } = useContext(BooksContext)

  const handleLoadMore = () => {
    const { searchTerm, startIndex } = state
    fetchBooks(searchTerm, startIndex, ADD_BOOKS)
  }

  useEffect(() => {
    const getQuery = () => new URLSearchParams(search)
    const query = getQuery()
    fetchBooks(query.get('query'), 0, ADD_BOOKS)
  }, [])

  const resultStatus = `Showing ${
    state.startIndex > state.totalItems ? state.totalItems : state.startIndex
  } of ${state.totalItems} results`

  if (state.error)
    return (
      <Container>
        <p>{state.error} </p>
      </Container>
    )

  if (state.isFetching)
    return (
      <Container>
        <p>Fetching books...</p>
      </Container>
    )

  return (
    <StyledSearch>
      <BookCards />
      <Navigation>
        <p>{resultStatus}</p>
        {state.totalItems > 10 && (
          <LoadMoreButton
            type='button'
            onClick={handleLoadMore}
            disabled={state.startIndex >= state.totalItems || state.isFetching}
          >
            Load More
          </LoadMoreButton>
        )}
      </Navigation>
    </StyledSearch>
  )
}

export default Search
