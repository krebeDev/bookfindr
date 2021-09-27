import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import Container from '../components/ui/Container'

const StyledLink = styled(Link)`
  font-size: 1.5rem;
  margin-top: 1rem;
  display: block;
  text-decoration: underline;
`

const NotFound = () => {
  return (
    <section>
      <Container>
        <h1>Page not found</h1>
        <StyledLink to='/'>Go Home</StyledLink>
      </Container>
    </section>
  )
}

export default NotFound
