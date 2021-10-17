import { Link } from 'react-router-dom'
import styled from 'styled-components'
import breakpoints from './../../commons/breakpoints'

const StyledLink = styled(Link)`
  font-weight: 700;
`
const Breadcrumb = styled.nav`
  margin-bottom: 1rem;
  display: flex;
  align-items: center;
`

const DetailsBoxOuter = styled.div`
  background: ${({ theme }) => theme.white};
  padding: 2rem 1rem;
  border-radius: 0.5rem;

  @media ${breakpoints.device.tablet} {
    padding: 2rem;
  }
`

const BookTitle = styled.h1`
  font-size: 1.5rem;
  margin-bottom: 1rem;
  text-align: center;

  @media ${breakpoints.device.tablet} {
    text-align: left;
  }
`

const BookCover = styled.div`
  margin-bottom: 1rem;
  box-shadow: -5px 5px 15px rgba(0, 0, 0, 0.1);
`

const DetailsBoxInner = styled.div`
  max-width: 50rem;
`

const BookInfo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  @media ${breakpoints.device.tablet} {
    flex-direction: row;
    align-items: flex-start;
    justify-content: flex-start;
  }
`

const TextualInfo = styled.div`
  @media ${breakpoints.device.tablet} {
    margin-left: 2rem;
  }
`

const FactsTable = styled.table`
  margin-top: 1rem;

  & th {
    text-transform: capitalize;
    text-align: left;
    font-weight: 400;
    padding-right: 1rem;
  }
`

const AnchorLink = styled.a`
  padding: 0.5rem 1.5rem;
  border-radius: 1.5rem;
  transition: 0.3s;
  border: 1px solid ${({ theme }) => theme.brightGreen};

  &:hover {
    background: ${({ theme }) => theme.brightGreen};
    color: inherit;
  }
`

const ButtonGroup = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 2rem;
`

const Title = styled.p`
  max-width: 12rem;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;

  @media ${breakpoints.device.tablet} {
    max-width: 25rem;
  }
`

export default {
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
}
