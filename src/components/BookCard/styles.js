import styled from 'styled-components'
import breakpoints from '../../commons/breakpoints'

const StyledCard = styled.li`
  border-radius: 0.5rem;
  padding: 1rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  margin: 1rem auto;
  width: 100%;
  max-width: 50rem;
  box-shadow: -5px 5px 15px rgba(0, 0, 0, 0.05);

  @media ${breakpoints.device.tablet} {
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

  & > h3,
  p {
    margin-bottom: 0.5rem;
  }
`
const ButtonGroup = styled.div`
  margin-top: auto;
`
const AddButton = styled.button`
  padding: 0.7rem 1.5rem;
  border-radius: 1.5rem;
  transition: 0.3s;
  border: 1px solid ${({ theme }) => theme.brightGreen};

  &:hover {
    background: ${({ theme }) => theme.brightGreen};
  }

  &:disabled {
    background: ${({ theme }) => theme.veryLightGreen};
    border-color: ${({ theme }) => theme.lightGrey};
    cursor: no-drop;
  }
`

const BookCover = styled.img`
  border: 1px solid ${({ theme }) => theme.mediumGreen};
`

export default {
  StyledCard,
  Summary,
  Info,
  BookCover,
  ButtonGroup,
  AddButton,
}
