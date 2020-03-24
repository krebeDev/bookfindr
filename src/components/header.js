import React, { Component } from 'react';
import styled from 'styled-components';
import logo from './../logo.png'
import App from './../App';


const HeaderElem = styled.header`
  background: #d6f7d0;
  padding-bottom: 4rem;
`;

const Container = styled.div`
  max-width: 1200px;
  margin: auto;
  padding: 0 1rem;
`;

const HeaderBar = styled.nav`
  background: #f8f8f8;  
  padding: 1rem 0;
`;

const LogoWrapper = styled.div`
  width: 10rem;
  display: inline-block;
`;

const AppLogo = styled.img`
  max-width: 100%;
  height: auto;
`;

const SearchBar = styled.div`
  text-align: center;
`;

const HeaderTitle = styled.h1`
  color: #344031;
  margin: 2.5rem auto;
  font-size: 1.8rem;

    @media(min-width: 768px) {
      font-size: 2.5rem;
    }
  `;

const Input = styled.input`
  padding: 0.8rem;
  border: none;
  width: 85%;
  border-radius: 10px;
  background: #f8f8f8;

    @media(min-width: 768px) {
      width: 35%;
      border-radius: 10px 0 0 10px;
    }
  `;

const SearchBtn = styled.button`
  padding: 0.77rem 2rem;
  background: #448026;
  font-size: 0.9rem;
  letter-spacing: 2px;
  border-radius: 10px;
  color: #f8f8f8;
  border: none;
  margin-top: 2rem;

  &:hover {
    opacity: 0.9;
  }

    @media(min-width: 768px) {
      border-radius: 0 10px 10px 0;
      margin-top: 0;

    }
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
    return ( 
      <HeaderElem>
        <HeaderBar>
          <Container>
            <LogoWrapper>
              <a href="/"> <AppLogo 
                src={logo} alt="kaybooks logo"
              /></a>
            </LogoWrapper>         
          </Container>
        </HeaderBar>
        <SearchBar>
          <HeaderTitle>All your books, in one place!</HeaderTitle>
          <form ref={form => this.form = form}>
            <Input type="search" 
              id="search"
              name="search"
              onChange={ this.handleChange }
              placeholder="Search for a book" 
              aria-label="Search for a book"
              />
            <SearchBtn 
              type="button" 
              onClick={ this.handleSearch }>
              Search
            </SearchBtn>
            </form>
        </SearchBar>
      </HeaderElem>
     );
  }
}
 
export default Header 