import React from 'react'
import { render, screen, wait } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { Router } from 'react-router-dom'
import { createMemoryHistory } from 'history'
import SearchForm from '../components/SearchForm'

describe('SearchForm', () => {
  const history = createMemoryHistory()

  beforeEach(() => {
    jest.clearAllMocks()
    render(
      <Router history={history}>
        <SearchForm />
      </Router>
    )
  })

  it('throws error when it fails validation', () => {
    clickSearchButton()

    expect(screen.getByText(/please enter a search term/i)).toBeInTheDocument()
  })

  it('submits form and redirects to search page when it passes validation', () => {
    userEvent.type(
      screen.getByRole('textbox', {
        name: /search term/i,
      }),
      'design'
    )

    clickSearchButton()
    wait(async () => {
      expect(
        await screen.findByText(/result for "design"/i)
      ).toBeInTheDocument()
    })
  })
})

function clickSearchButton() {
  userEvent.click(screen.getByRole('button', { name: /search/i }))
}
