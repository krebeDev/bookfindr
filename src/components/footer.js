import React from 'react'
import styled from 'styled-components'

const AppFooter = styled.footer`
  margin-top: auto;
  text-align: center;
`

const Container = styled.div`
  max-width: 1200px;
  margin: auto;
  padding: 1rem;
`

const Footer = () => {
  return (
    <AppFooter>
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
    </AppFooter>
  )
}

export default Footer
