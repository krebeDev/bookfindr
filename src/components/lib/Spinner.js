import React from 'react'
import styled from 'styled-components'

const SpinnerBox = styled.div`
  max-width: 18rem;
  margin: auto;
  text-align: center;
`

const SpinningIndicator = styled.div`
  width: 20px;
  height: 20px;
  border: 5px solid ${({ theme }) => theme.brightGreen};
  border-radius: 50%;
  border-top: 5px solid ${({ theme }) => theme.lightGreen};
  width: 3rem;
  height: 3rem;
  margin: 2rem auto;
  -webkit-animation: spin 0.5s linear infinite;
  animation: spin 0.5s linear infinite;
`

const Spinner = ({ title }) => {
  return (
    <SpinnerBox>
      <SpinningIndicator />
      <p>{title}</p>
    </SpinnerBox>
  )
}

export default Spinner
