import React, { Component } from 'react';
import styled from 'styled-components';
import logo from './../bookfindr-logo.svg';
import lightIcon from './../assets/light-mode.svg';
import darkIcon from './../assets/dark-mode.svg';
import { lightTheme } from '../theme/globalStyles';


const HeaderElem = styled.header`
  background: ${props => props.theme.primary};
  padding-bottom: 4rem;
`;

const HeaderBar = styled.nav`
  background: ${props => props.theme.secondary};
`;

const FlexWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 1200px;
  margin: auto;
  padding: 1rem;
`;

const LogoWrapper = styled.div`
  flex-grow: 1;
`;

const AppLogo = styled.img`
  width: 10rem;
  height: auto;

    @media (min-width: 768px) {
      width: 13rem;
    }
`;

const SearchBar = styled.div`
  text-align: center;
`;

const HeaderTitle = styled.h1`
  font-family: "Lato", sans-serif;
  color: ${props => props.theme.textColorLight};
  margin: 2.5rem auto;
  font-size: 1.6rem;

  @media (min-width: 768px) {
    font-size: 2.8rem;
  }
`;

const Input = styled.input`
  padding: 0.6rem;
  border: none;
  width: 60%;
  border-radius: 10px 0 0 10px;
  background: ${props => props.theme.secondary};

  @media (min-width: 768px) {
    width: 38%;
    padding: 0.8rem;
  }
`;

const SearchBtn = styled.button`
  padding: 0.56rem 1rem;
  background: ${props => props.theme.darkGreen};
  font-size: 0.9rem;
  letter-spacing: 2px;
  border-radius: 0 10px 10px 0;
  color: ${props => props.theme.textColorLight};
  border: none;

  &:hover {
    opacity: 0.9;
  }

  @media (min-width: 768px) {
    padding: 0.79rem 2rem;
  }
`;
    
  const NavItems = styled.ul`
    padding-right: 1.8rem;
    list-style-type: none;
  `;
    
const Shelf = styled.li`
  font-weight: 700;
  color: ${props => props.theme.textColor};
  text-transform: uppercase;
  cursor: pointer;
  font-size: 0.8rem;
  letter-spacing: 1px;

  @media (min-width: 768px) {
    font-size: 1rem;
  }

  &:hover {
    opacity: 0.8;
  }
`;
const ThemeSwitcher = styled.img`
  width: 1.7rem;
  height: auto;
  cursor: pointer;

  @media (min-width: 768px) {
    width: 2rem;
  }
`;

const Form = styled.form`
  max-width: 1200px;
  margin: auto;
`;

class Header extends Component {
  state = {
    searchTerm: '',
  }

  handleChange = e => this.setState({ searchTerm: e.target.value });

  handleSearch = async (e) => {
    const { onSearch } = this.props;
    const searchTerm = this.state.searchTerm;
    e.preventDefault();
    
    if (searchTerm.length === 0) {
      onSearch(null);
    } else {
      onSearch(encodeURIComponent(searchTerm)) 
    }
    await this.setState({ searchTerm: '' })
    this.form.reset();
  }
  
  render() { 
    const { onThemeChange, theme } = this.props;

    return (
      <HeaderElem>
        <HeaderBar>
          <FlexWrapper>
            <LogoWrapper>
              <AppLogo src={logo} alt="bookfindr logo" />
            </LogoWrapper>
            <NavItems>
              <Shelf>My Shelf</Shelf>
            </NavItems>
            <ThemeSwitcher
              onClick={onThemeChange}
              src={theme === lightTheme ? darkIcon : lightIcon}
              alt="theme-switcher"
            />
          </FlexWrapper>
        </HeaderBar>
        <SearchBar>
          <HeaderTitle>All your books in one place</HeaderTitle>
          <Form ref={form => (this.form = form)}>
            <Input
              type="search"
              id="search"
              name="search"
              onChange={this.handleChange}
              placeholder="Search for a book"
              aria-label="Search for a book"
            />
            <SearchBtn type="button" onClick={this.handleSearch}>
              Search
            </SearchBtn>
          </Form>
        </SearchBar>
      </HeaderElem>
    );
  }
}
 
export default Header 
