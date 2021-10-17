import { createGlobalStyle } from 'styled-components'
import breakpoints from './breakpoints'

const GlobalStyle = createGlobalStyle`
*,
*::before,
*::after {
  box-sizing: border-box;
  margin: 0;
   padding: 0;
}

html, body {
  height: 100%;
}

body {
  font-size: 16px;
  font-family: 'Lato', sans-serif;
  background: ${({ theme }) => theme.veryLightGreen};
  color: ${({ theme }) => theme.greyishGreen};
  line-height: 1.5;
}

h1 {
  font-size: 1.8rem;
}

h2 {
  font-size: 1.2rem;
}

.root {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
}

button {
  outline: none;
  background: none;
  border: none; 
  cursor: pointer;
}

a {
  text-decoration: none;
  color: inherit;
}

a:hover {
  color: ${({ theme }) => theme.baseGreen};
}

input:-webkit-autofill {
  -webkit-box-shadow: 0 0 0px 1000px ${({ theme }) => theme.white} inset;
  box-shadow: 0 0 0px 1000px ${({ theme }) => theme.white} inset;
}

ul {
  list-style: none;
}

 @keyframes spin {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }

@media ${breakpoints.device.tablet} {
  h1 {
    font-size: 2.3rem;
  }

  h2 {
    font-size: 1.5rem;
  }
}
`

export default GlobalStyle
