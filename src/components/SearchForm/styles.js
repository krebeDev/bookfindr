import styled from 'styled-components'
import breakpoints from './../../commons/breakpoints'

const FormGroup = styled.div`
  display: flex;
  max-width: 40rem;
  margin: auto;
  position: relative;
  z-index: 2;
  box-shadow: 5px 5px 10px rgba(160, 208, 154, 0.3);
  border-radius: 0.5rem;
`

const Input = styled.input`
  padding: 0.5rem;
  flex: 1;
  border-radius: 0.5rem 0 0 0.5rem;
  border: none;
  background: ${({ theme, home }) =>
    home ? theme.veryLightGreen : theme.white};

  &:focus {
    outline: none;
  }

  @media ${breakpoints.device.tablet} {
    padding: 1rem;
  }
`

const Button = styled.button`
  border-radius: 0 0.5rem 0.5rem 0;
  background: ${({ theme }) => theme.lightGreen};
  padding: 0.8rem 1rem;

  @media ${breakpoints.device.tablet} {
    padding: 1rem 2rem;
  }
`

export default {
  FormGroup,
  Input,
  Button,
}
