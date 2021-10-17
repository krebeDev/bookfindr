import styled from 'styled-components'
import breakpoints from './../../commons/breakpoints'

const Result = styled.div`
  background: ${({ theme }) => theme.white};
  border-radius: 0.5rem;
  margin-top: 1.5rem;
  padding: 1rem;
  
  @media ${breakpoints.device.tablet} {
    padding: 1rem 2rem 2rem 2rem;
  }
}`

const LoadMoreButton = styled.button`
  padding: 1rem 3rem;
  background: ${({ theme }) => theme.baseGreen};
  color: ${({ theme }) => theme.veryLightGreen};
  border-radius: 2rem;
  font-size: 1rem;

  &:disabled {
    background: grey;
    cursor: default;
  }
`

const Navigation = styled.div`
  text-align: center;
  & > p {
    margin-bottom: 1rem;
  }
`

const FormBox = styled.div`
  margin-bottom: 2rem;
`

export default {
  Result,
  LoadMoreButton,
  Navigation,
  FormBox,
}
