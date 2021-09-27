import React from 'react'
import styled from 'styled-components'
import breakpoints from './../commons/breakpoints'

const StyledCard = styled.li`
  border-radius: 0.5rem;
  padding: 1rem;
  background: ${({ theme }) => theme.veryLightGreen};
  transition: 0.3s;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  margin: 1rem auto;
  width: 100%;
  max-width: 20rem;

  &:hover {
    box-shadow: -3px 3px 10px rgba(0, 0, 0, 0.2);
  }

  @media ${breakpoints.device.tablet} {
    width: 27rem;
    max-width: 27rem;
    text-align: left;
    flex-direction: row;
    margin: 1rem 0.5rem;
  }
`

const Summary = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 1rem;

  @media ${breakpoints.device.tablet} {
    margin-top: 0;
    margin-left: 1rem;
  }
`

const Info = styled.div`
  margin-bottom: 1rem;

  & > h3 {
    margin-bottom: 0.5rem;
  }
`

const Button = styled.button`
  padding: 0.5rem;
  border-radius: 5px;

  & + button {
    margin-left: 1rem;
  }
`

const ViewButton = styled(Button)`
  background: ${({ theme }) => theme.lightGreen};
`

const AddButton = styled(Button)`
  border: 2px solid ${({ theme }) => theme.brightGreen};
`

const ButtonGroup = styled.div`
  padding-top: 1rem;
  border-top: 2px solid ${({ theme }) => theme.mediumGreen};
  margin-top: auto;
`

const BookCover = styled.img`
  border: 1px solid ${({ theme }) => theme.mediumGreen};
  border-radius: 5px;
`

const BookCard = ({ title, cover, authors, publisher, infoLink }) => {
  const addToShelf = () => {
    alert('This feature will be added within the week.')
  }

  return (
    <StyledCard>
      <a href={infoLink} target='_blank' rel='noopener noreferrer'>
        <BookCover src={cover} alt={title} />
      </a>
      <Summary>
        <Info>
          <h3>
            <a href={infoLink} target='_blank' rel='noopener noreferrer'>
              {title}
            </a>
          </h3>
          <p>By: {authors}</p>
          <p>Published By: {publisher}</p>
        </Info>

        <ButtonGroup>
          <ViewButton
            as='a'
            href={infoLink}
            target='_blank'
            rel='noopener noreferrer'
          >
            See Details
          </ViewButton>
          <AddButton onClick={addToShelf}>Add to Shelf</AddButton>
        </ButtonGroup>
      </Summary>
    </StyledCard>
  )
}

export default BookCard
