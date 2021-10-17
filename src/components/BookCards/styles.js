import styled from 'styled-components'
import breakpoints from './../../commons/breakpoints'

const StyledBookCards = styled.ul`
  display: flex;
  margin: 1rem auto;
  flex-direction: column;

  @media ${breakpoints.device.tablet} {
    justify-content: space-around;
    flex-direction: column;
    flex-wrap: wrap;
  }
`

export default StyledBookCards
