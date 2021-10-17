import styled from 'styled-components'
import breakpoints from '../../commons/breakpoints'

const Container = styled.div`
  max-width: ${breakpoints.size.desktop};
  padding: 0 1rem;
  margin: auto;

  @media ${breakpoints.device.tablet} {
    padding: 0 2rem;
  }
`
export default Container
