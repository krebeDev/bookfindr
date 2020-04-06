import { createGlobalStyle } from 'styled-components';
// import { darkTheme } from './globalStyles';

const GlobalStyle = createGlobalStyle`
*,
*::before,
*::after {
  box-sizing: border-box;
  margin: 0;
}

html, body {
  height: 100%;
}

body {
  font-size: 16px;
  font-family: 'Lato', sans-serif;
  background: ${props => props.theme.secondary};
  color: ${props => props.theme.textColor};
}

h1, h2, h3 {
  font-family: 'Ubuntu', sans-serif;
  font-weight: 700;
}

.root {
  height: 100vh;
  display: flex;
  flex-direction: column;
}
`;

export default GlobalStyle;


export const lightTheme = {
  primary: "#1e9113",
  secondary: "#f6f7f6",
  accent: "#188809",
  textColor: "#061b04",
  warnRed: "#ff0000",
  grey: "#c0bebe",
  darkGreen: "#11500a",
  textColorLight: "#f6f6f6",
  lightGrey: "#b6c0b4"
};


export const darkTheme = {
  primary: "#0d4008",
  secondary: "#030d02",
  accent: "#061d03",
  textColor: "#b6c0b4",
  warnRed: "#ac0d0d",
  grey: "#485346",
  darkGreen: "#061b04",
  textColorLight: "#b6c0b4",
  lightGrey: "#061d03"
};



