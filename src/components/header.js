import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import Logo from './svg/Logo'
import SunnyIcon from './svg/Sunny'
import Container from './ui/Container'
import breakpoints from './../commons/breakpoints'

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

const LogoAnchor = styled(Link)`
  width: 5rem;
  color: ${({ theme }) => theme.greyishGreen};

  @media ${breakpoints.device.tablet} {
    width: 7rem;
  }
`

const Right = styled.div`
  display: flex;
  align-items: center;
`

const ToggleButton = styled.button`
  width: 1.5rem;
  margin-left: 2rem;
`

const Header = () => {
  return (
    <StyledHeader>
      <Nav as='nav'>
        <LogoAnchor to='/' title='Go to home page' aria-label='bookfindr logo'>
          <Logo />
        </LogoAnchor>

        <Right>
          <Link to='/shelf'>Shelf</Link>
          <ToggleButton title='toggle theme' aria-label='theme switcher'>
            <SunnyIcon />
          </ToggleButton>
        </Right>
      </Nav>
    </StyledHeader>
  )
}

export default Header
