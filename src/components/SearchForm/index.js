import React, { useState } from 'react'
import { useHistory, useLocation } from 'react-router-dom'
import styledComonents from './styles'
import { getQuery } from './../../commons/utilities'

const { FormGroup, Input, Button } = styledComonents

const SearchForm = (props) => {
  const location = useLocation()
  const query = getQuery(location.search)

  const [searchTerm, setSearchTerm] = useState(query || '')
  const history = useHistory()
  const handleChange = (e) => {
    setSearchTerm(e.target.value)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
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
          value={searchTerm}
          aria-label='serach term'
          placeholder="Enter a book title or author's name"
          onChange={handleChange}
          home={props.home}
        />
        <Button type='submit' onClick={handleSubmit}>
          Search
        </Button>
      </FormGroup>
    </form>
  )
}

export default SearchForm
