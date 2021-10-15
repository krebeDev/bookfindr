import React from 'react'
import Container from '../components/ui/Container'
// import styled from 'styled-components'
import BookShelf from './../components/BookShelf'

const Shelf = () => {
  return (
    <section>
      <Container>
        <h1>My Shelf</h1>
        <BookShelf />
      </Container>
    </section>
  )
}

export default Shelf
