import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  *{
    box-sizing: border-box;
  }
  html, body {
    margin:0;
    padding:0;
  }
  body {
    margin: 0;
    font-size: 1rem;
    background-color: #ffffff;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
    'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
    sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  }
  p{
    margin: 0;
    line-height: 1.5;
  }
  p + p {
    margin-top: 1rem;
  }
  li{
    line-height: 1.5;
  }  
`;

export default GlobalStyle;
