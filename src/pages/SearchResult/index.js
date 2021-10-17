import React, { useContext, useEffect } from 'react'
import { BooksContext } from './../../contexts/BooksContext'
import BookCards from '../../components/BookCards'
import Container from '../../components/lib/Container'
import ResultTitle from '../../components/ResultTitle'
import SearchForm from '../../components/SearchForm'
import Spinner from '../../components/lib/Spinner'
import { getQuery } from '../../commons/utilities'
import styledComponents from './styles'

const { Result, LoadMoreButton, Navigation, FormBox } = styledComponents

const SearchResult = ({ location: { search } }) => {
  const { state, fetchBooks, resetBooks } = useContext(BooksContext)

  const handleLoadMore = () => {
    const { searchTerm, startIndex } = state
    fetchBooks(searchTerm, startIndex)
  }

  const query = getQuery(search)

  useEffect(() => {
    resetBooks()
    fetchBooks(query, 0)
  }, [search])

  const resultStatus = `Showing ${
    state.startIndex > state.totalItems ? state.totalItems : state.startIndex
  } of ${state.totalItems} results`

  if (state.error)
    return (
      <Container>
        <p>{state.error} </p>
      </Container>
    )

  if (state.isFetching) return <Spinner title='Fetching books...' />

  return (
    <section>
      <Container>
        <FormBox>
          <SearchForm />
        </FormBox>
        <ResultTitle title={`Result for "${query}"`} />
        <Result>
          <BookCards />
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
        </Result>
      </Container>
    </section>
  )
}

export default SearchResult
