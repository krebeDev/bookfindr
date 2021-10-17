import React from 'react'
import { NavLink } from 'react-router-dom'
import Logo from './../svg/Logo'
import SunnyIcon from './../svg/Sunny'
import styledComponents from './styles'

const { StyledHeader, Nav, LogoAnchor, NavLinks, ToggleButton } =
  styledComponents

const Header = () => {
  return (
    <StyledHeader>
      <Nav as='nav'>
        <LogoAnchor
          to='/'
          title='Go to home page'
          aria-label='bookfindr logo'
          activeClassName='active-link'
        >
          <Logo />
        </LogoAnchor>

        <NavLinks>
          <NavLink to='/shelf' activeClassName='active-link'>
            Shelf
          </NavLink>
          <ToggleButton title='toggle theme' aria-label='theme switcher'>
            <SunnyIcon />
          </ToggleButton>
        </NavLinks>
      </Nav>
    </StyledHeader>
  )
}

export default Header
