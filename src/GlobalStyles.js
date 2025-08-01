import { createGlobalStyle } from 'styled-components';


const GlobalStyles = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;600&display=swap');

  body {
    font-family: 'Inter', sans-serif;
    margin: 0; /* Remove default body margin */
  }
`;

export default GlobalStyles;
