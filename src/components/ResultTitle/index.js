import React from 'react'
import StyledTitle from './styles'

const ResultTitle = ({ title }) => {
  return (
    <StyledTitle>
      <span>{title}</span>
      <span aria-hidden='true' />
    </StyledTitle>
  )
}

export default ResultTitle
