import { createGlobalStyle } from "styled-components";
import styled from 'styled-components';

export const Container = styled.div`
    width: 90%;
    max-width: 1180px;
    margin: 0 auto;
`;

export const GlobalStyles = createGlobalStyle`
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
    max-width: 100%;
    height: 100vh;
    background: var(--bg-color);
  }

  main {
    min-height: calc(100vh - 6rem);
  }

  a {
    text-decoration: none;
    color: var(--first-color);
  }

  :root {
    //===== Color =====//
    --first-color: ${({ theme }) => theme.colors.white};
    --second-color: ${({ theme }) => theme.colors.green};
    --second-color-alt: ${({ theme }) => theme.colors.greenAlt};
    --third-color: ${({ theme }) => theme.colors.red};
    --third-color-alt: ${({ theme }) => theme.colors.redAlt};
    --fourth-color: ${({ theme }) => theme.colors.grey};
    --alt-color: ${({ theme }) => theme.colors.gray};
    --bg-alt-color: ${({ theme }) => theme.colors.black};
    --bg-color: ${({ theme }) => theme.colors.dark};

    //===== Fonts =====//
    --first-font: ${({ theme }) => theme.fonts.roboto}
  }

  /*=============== SCROLL BAR ===============*/
  ::-webkit-scrollbar {
    width: .6rem;
    border-radius: .5rem;
    background: var(--bg-alt-color);
  }

  ::-webkit-scrollbar-thumb {
    border-radius: .5rem;
    background-color: hsla(240, 6%, 23%);
    transition: .5s;
  }

  ::-webkit-scrollbar-thumb:hover {
    background-color: hsla(240, 6%, 29%);
  }
`;
