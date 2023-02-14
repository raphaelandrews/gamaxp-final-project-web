import { createGlobalStyle } from "styled-components";
import styled from 'styled-components';

export const Container = styled.div`
    width: 90%;
    max-width: 1120px;
    margin: 0 auto;
`;

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    width: 100vw;
    height: 100vh;
    color: #000000;
    background-color: hsl(0, 0%, 100%);
    font-family: 'Inter', sans-serif;
  }

  a {
    text-decoration: none;
  }
`;

export default GlobalStyle;