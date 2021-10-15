import React, { useState } from 'react'
import { useHistory } from 'react-router-dom'
import styled from 'styled-components'
import breakpoints from './../commons/breakpoints'

const FormGroup = styled.div`
  display: flex;
  max-width: 40rem;
  margin: auto;
  position: relative;
  z-index: 2;
`

const Input = styled.input`
  padding: 0.5rem;
  flex: 1;
  border-radius: 0.5rem 0 0 0.5rem;
  border: none;
  background: ${({ theme }) => theme.veryLightGreen};

  &:focus {
    outline: none;
  }

  @media ${breakpoints.device.tablet} {
    padding: 1rem;
  }
`

const Button = styled.button`
  border-radius: 0 0.5rem 0.5rem 0;
  background: ${({ theme }) => theme.lightGreen};
  padding: 0.8rem 1rem;

  @media ${breakpoints.device.tablet} {
    padding: 1rem 2rem;
  }
`

const SearchForm = () => {
  const [searchTerm, setSearchTerm] = useState('')
  const history = useHistory()
  const handleChange = (e) => {
    setSearchTerm(e.target.value)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    const sanitizedQuery = searchTerm.trim().toLowerCase()
    if (!sanitizedQuery) return
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
          placeholder='Enter a book title or author name'
          onChange={handleChange}
        />
        <Button type='submit' onClick={handleSubmit}>
          Search
        </Button>
      </FormGroup>
    </form>
  )
}

export default SearchForm
