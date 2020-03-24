import React, { Component } from 'react';
import styled from 'styled-components';

const NavigationWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 3rem;
  margin: 2rem auto;
  background: #c7c9c5;
`;

  const NavBtn =  styled.a`
    padding: 0.5rem 1.5rem;
    border-radius: 10px;
    background: #448026;
    color: #f8f8f8;
    border: none;
    text-decoration: none;
    cursor: pointer;

    @media(min-width: 414px) {
      padding: 0.5rem 2rem;
    }
  `;


class Navigation extends Component {
  render() { 
    const { onNextPage, onPrevPage }  = this.props;

    return (
      <NavigationWrapper>
        <div>
          <NavBtn disabled='true' // Not implemented yet. 
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
      </NavigationWrapper>
    );
  }
}
 
export default Navigation;