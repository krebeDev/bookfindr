import { NavLink } from 'react-router-dom'
import styled from 'styled-components'
import breakpoints from './../../commons/breakpoints'
import Container from './../lib/Container'

const StyledHeader = styled.header`
  margin-bottom: 2rem;
  box-shadow: 5px 5px 10px rgba(160, 208, 154, 0.2);
  padding: 1rem 0;

  & a {
    text-transform: uppercase;
  }
`

const Nav = styled(Container)`
  display: flex;
  justify-content: space-between;
  align-items: center;
  }
`

const LogoAnchor = styled(NavLink)`
  width: 5rem;
  color: ${({ theme }) => theme.greyishGreen};

  @media ${breakpoints.device.tablet} {
    width: 7rem;
  }
`

const NavLinks = styled.div`
  display: flex;
  align-items: center;

  & .active-link {
    color: ${({ theme }) => theme.baseGreen};
  }
`

const ToggleButton = styled.button`
  width: 1.5rem;
  margin-left: 2rem;
`

export default {
  StyledHeader,
  Nav,
  LogoAnchor,
  NavLinks,
  ToggleButton,
}
