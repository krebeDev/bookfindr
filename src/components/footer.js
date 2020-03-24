import React from 'react';
import styled from 'styled-components';

const AppFooter = styled.footer`
  background: #344031;
  color: #d6f7d0;
  margin-top: auto;
`;

const Container = styled.div`
  max-width: 1200px;
  margin: auto;
  padding: 1rem;
  text-align: center;
`;

const FooterLink = styled.a`
  text-decoration: none;
  color: #d6f7d0;

  &:hover {
    color: #fff;
  }
`;

const Footer = () => {
  return ( 
    <AppFooter>
      <Container>
        <p>&copy;2020. All rights reserved | Books by <FooterLink href="https://books.google.com/">Google</FooterLink> | 
          Designed by <FooterLink href="https://www.linkedin.com/in/krebedev/">@krebeDev</FooterLink></p>
      </Container>
    </AppFooter>
   );
}
 
export default Footer;