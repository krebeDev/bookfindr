import React, { useContext, useState } from 'react'
import { useParams, useHistory } from 'react-router-dom'
import { BooksContext } from './../../contexts/BooksContext'
import Container from './../../components/lib/Container'
import deleteIcon from './../../images/delete.svg'
import styledComponents from './styles'
import ConfirmationModal from '../../components/Modal'

const {
  StyledLink,
  Breadcrumb,
  DetailsBoxOuter,
  BookTitle,
  BookCover,
  DetailsBoxInner,
  BookInfo,
  TextualInfo,
  FactsTable,
  AnchorLink,
  ButtonGroup,
  Title,
} = styledComponents

const BookDetails = () => {
  const [isModalOpen, setIsModalOpen] = useState(false)
  const { bookId } = useParams()
  const { getBookFromShelf, deleteFromShelf } = useContext(BooksContext)

  const history = useHistory()
  const handleDelete = () => {
    history.push('/shelf')
    deleteFromShelf(bookId)
  }

  const book = getBookFromShelf(bookId)
  const { title, infoLink, summary, cover } = book

  const bookDetails = (({ authors, publisher, year, length, isbn }) => ({
    authors,
    publisher,
    year,
    length,
    isbn,
  }))(book)

  const renderBookDetails = Object.entries(bookDetails).map(([key, value]) => (
    <tr key={key}>
      <th>{key}:</th>
      <td>{value}</td>
    </tr>
  ))

  return (
    <section>
      <Container>
        <Breadcrumb>
          <StyledLink to='/shelf'> &larr; Bookshelf </StyledLink>
          <Title>/{title}</Title>
        </Breadcrumb>
        <DetailsBoxOuter>
          <DetailsBoxInner>
            <BookTitle>{title}</BookTitle>
            <BookInfo>
              <BookCover>
                <img src={cover} alt={title} />
              </BookCover>
              <TextualInfo>
                <p>{summary}</p>
                <FactsTable>
                  <tbody>{renderBookDetails}</tbody>
                </FactsTable>
                <ButtonGroup>
                  <AnchorLink href={infoLink} rel='noopener noreferrer'>
                    View More &#x2197;
                  </AnchorLink>
                  <button
                    onClick={() => setIsModalOpen(true)}
                    title='Delete'
                    aria-label='delete from bookshelf'
                  >
                    <img src={deleteIcon} alt={title} width={25} height={25} />
                  </button>
                </ButtonGroup>
              </TextualInfo>
            </BookInfo>
          </DetailsBoxInner>
        </DetailsBoxOuter>
      </Container>
      {isModalOpen && (
        <ConfirmationModal
          closeModal={() => setIsModalOpen(false)}
          deleteBook={handleDelete}
        />
      )}
    </section>
  )
}

export default BookDetails
