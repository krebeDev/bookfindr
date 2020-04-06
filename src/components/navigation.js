import React, { Component } from 'react';
import styled from 'styled-components';

const NavigationWrapper = styled.div`
  background: ${props => props.theme.primary};
  padding: 3rem 2rem;
`;

const Container = styled.div`
  max-width: 1200px;
  margin: auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

  const NavBtn = styled.a`
    padding: 0.5rem 1.5rem;
    border-radius: 10px;
    background: ${props => props.theme.darkGreen};
    color: ${props => props.theme.textColorLight};
    border: none;
    text-decoration: none;
    cursor: pointer;

    @media (min-width: 414px) {
      padding: 0.5rem 2rem;
    }
  `;


class Navigation extends Component {
  render() { 
    const { onNextPage, onPrevPage }  = this.props;

    return (
      <NavigationWrapper>
        <Container>
          <div>
            <NavBtn // Not implemented yet. 
              onClick={ onPrevPage }
              href="/"> &laquo; Previous
            </NavBtn>
          </div>
          <div>
            <form noValidate>
              <NavBtn 
                onClick={ onNextPage }
                type="button">Next &raquo;
              </NavBtn>
            </form>
          </div>
        </Container>
      </NavigationWrapper>
    );
  }
}
 
export default Navigation;