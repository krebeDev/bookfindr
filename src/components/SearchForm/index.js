import React, { useState } from 'react'
import { useHistory, useLocation } from 'react-router-dom'
import styledComonents from './styles'
import { getQuery } from './../../commons/utilities'

const { FormGroup, Input, Button, ErrorMessage } = styledComonents

const SearchForm = (props) => {
  const location = useLocation()
  const query = getQuery(location.search)

  const [searchTerm, setSearchTerm] = useState(query || '')
  const [error, setError] = useState('')
  const history = useHistory()
  const handleChange = (e) => {
    setSearchTerm(e.target.value)
    setError('')
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setError((currentState) =>
      !searchTerm ? 'Please enter a search term' : currentState
    )
    if (!searchTerm) return
    const sanitizedQuery = searchTerm.trim().toLowerCase()
    const formatedQuery = sanitizedQuery.split(' ').join('-')
    history.push(`/search?query=${formatedQuery}`)
  }

  return (
    <form>
      <FormGroup>
        <Input
          name='searchTerm'
          type='text'
          value={searchTerm}
          aria-label='search term'
          placeholder="Enter a book title or author's name"
          onChange={handleChange}
          home={props.home}
          required
        />
        {Boolean(error) && <ErrorMessage role='alert'>{error}</ErrorMessage>}
        <Button type='submit' onClick={handleSubmit}>
          Search
        </Button>
      </FormGroup>
    </form>
  )
}

export default SearchForm
