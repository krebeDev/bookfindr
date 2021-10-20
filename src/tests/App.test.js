import React from 'react'
import { render, screen } from '@testing-library/react'
import App from './../App'

it('renders App', () => {
  render(<App />)

  expect(
    screen.getByText(/find & organize your favorite books/i)
  ).toBeInTheDocument()
})
