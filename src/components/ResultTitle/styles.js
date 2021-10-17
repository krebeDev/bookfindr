import styled from 'styled-components'
import breakpoints from '../../commons/breakpoints'

const StyledTitle = styled.h2`
  display: flex;
  align-items: center;

  & :nth-child(2) {
    flex: 1;
    height: 0.3rem;
    border-radius: 0 0.5rem 0.5rem 0;
    margin-left: 1rem;
    background: ${({ theme }) => theme.lightGreen};
  }

  @media ${breakpoints.device.tablet} {
    & :nth-child(2) {
      height: 0.5rem;
    }
  }
`
export default StyledTitle
