import styled from 'styled-components'
import breakpoints from './../../commons/breakpoints'

const ShelfItems = styled.ul`
  display: flex;
  flex-wrap: wrap;
  background: ${({ theme }) => theme.white};
  padding: 1rem;
  justify-content: center;
  margin-top: 1rem;

  @media ${breakpoints.device.tablet} {
    justify-content: flex-start;
  }
`

const BookCover = styled.figure`
  display: flex;
  flex-flow: column;
  padding: 0.5rem;
  max-width: 160px;
  box-shadow: -5px 5px 15px rgba(0, 0, 0, 0.1);
  margin: 1rem;
  transition: 0.3s;

  &:hover {
    box-shadow: -5px 5px 15px rgba(0, 0, 0, 0.2);
  }
`
const TruncatedText = styled.span`
  display: block;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  line-height: 1.2;
  color: ${({ author, theme }) => (author ? theme.grey : 'inherit')};
`

const CoverImage = styled.img`
  max-width: 160px;
  max-height: 180px;
  margin-bottom: 0.5rem;
`

const MessageBox = styled.div`
  text-align: center;
  margin: 2rem auto;
  border-radius: 0.2rem;
`

const Message = styled.p`
  margin-top: 1rem;
  transition: 0.3s;
`

export default {
  ShelfItems,
  BookCover,
  TruncatedText,
  CoverImage,
  MessageBox,
  Message,
}
