import { createGlobalStyle } from "styled-components";
import styled from 'styled-components';

export const Container = styled.div`
    width: 90%;
    max-width: 1120px;
    margin: 0 auto;
`;

const GlobalStyles = createGlobalStyle`
  *,
  *::before,
  *::after {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    font-family: var(--first-font);
    font-weight: 500;
    color: var(--first-color);
    width: 100vw;
    height: 100vh;
    background: var(--bg-color);
  }

  a {
    text-decoration: none;
    color: var(--first-color);
  }

  :root {
    //===== Color =====//
    --first-color: ${({theme}) => theme.colors.white};
    --second-color: ${({theme}) => theme.colors.green};
    --third-color: ${({theme}) => theme.colors.red};
    --fourth-color: ${({theme}) => theme.colors.grey};
    --alt-color: ${({theme}) => theme.colors.gray};
    --bg-alt-color: ${({theme}) => theme.colors.black};
    --bg-color: ${({theme}) => theme.colors.dark};

    //===== Fonts =====//
    --first-font: ${({theme}) => theme.fonts.roboto}
  }
`;

export default GlobalStyles;