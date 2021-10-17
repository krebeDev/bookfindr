import React from 'react'
import Container from './../lib/Container'
import StyledFooter from './styles'

const Footer = () => {
  return (
    <StyledFooter>
      <Container>
        <p>
          &copy;2021 | Powered by{' '}
          <a href='https://books.google.com/' rel='noreferrer noopener'>
            Google Books API
          </a>{' '}
          | Designed by{' '}
          <a href='https://krebe.dev/' rel='noreferrer noopener'>
            krebeDev
          </a>
        </p>
      </Container>
    </StyledFooter>
  )
}

export default Footer
