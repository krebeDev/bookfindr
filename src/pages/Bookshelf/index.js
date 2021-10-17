import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { BooksContext } from '../../contexts/BooksContext'
import Container from '../../components/lib/Container'
import emptyIcon from '../../images/empty.svg'
import SearchForm from '../../components/SearchForm'
import styledComponents from './styles'

const {
  ShelfItems,
  BookCover,
  TruncatedText,
  CoverImage,
  MessageBox,
  Message,
} = styledComponents

const Bookshelf = () => {
  const {
    state: { shelf },
  } = useContext(BooksContext)

  const isEmptyShelf = shelf.length < 1

  const renderBookshelf = shelf.map(({ id, title, cover, authors }, index) => (
    <li key={id + index}>
      <Link to={`/shelf/${id}`}>
        <BookCover>
          <CoverImage src={cover} alt={title} />
          <figcaption>
            <TruncatedText>{title}</TruncatedText>
            <TruncatedText author> {authors}</TruncatedText>
          </figcaption>
        </BookCover>
      </Link>
    </li>
  ))

  return (
    <section>
      <Container>
        {isEmptyShelf ? (
          <>
            <MessageBox>
              <img src={emptyIcon} alt='empty shelf' width={80} height={80} />
              <Message>Your bookshelf is empty. Try adding some books?</Message>
            </MessageBox>
            <SearchForm />
          </>
        ) : (
          <>
            <h1>Bookshelf</h1>
            <ShelfItems>{renderBookshelf}</ShelfItems>
          </>
        )}
      </Container>
    </section>
  )
}

export default Bookshelf
