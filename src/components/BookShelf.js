import React, { useContext } from 'react'
import styled from 'styled-components'
import { BooksContext } from './../contexts/BooksContext'
import breakpoints from './../commons/breakpoints'

const ShelfItems = styled.ul`
  display: flex;
  flex-wrap: wrap;
  background: ${({ theme }) => theme.white};
  padding: 1rem;
  justify-content: center;

  @media ${breakpoints.device.tablet} {
    justify-content: flex-start;
  }
`

const Figure = styled.figure`
  display: flex;
  flex-flow: column;
  padding: 0.5rem;
  max-width: 160px;
  box-shadow: -5px 5px 15px rgba(0, 0, 0, 0.1);
  margin: 1rem;
`
const TruncText = styled.span`
  display: block;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  line-height: 1.2;
  color: ${({ author, theme }) => (author ? theme.grey : 'inherit')};
`

const Cover = styled.img`
  max-width: 160px;
  max-height: 180px;
  margin-bottom: 0.5rem;
`

const BookShelf = () => {
  const {
    state: { shelf },
  } = useContext(BooksContext)

  if (shelf.length < 1) {
    return <p>Your shelf is empty. Try adding some books.</p>
  }

  console.log(shelf[0])

  const renderBookshelf = shelf.map(({ id, title, cover, authors }) => (
    <li key={id}>
      <Figure>
        <Cover src={cover} alt={title} />
        <figcaption>
          <TruncText> {title}</TruncText>
          <TruncText author> {authors}</TruncText>
        </figcaption>
      </Figure>
    </li>
  ))

  return <ShelfItems>{renderBookshelf}</ShelfItems>
}

export default BookShelf
