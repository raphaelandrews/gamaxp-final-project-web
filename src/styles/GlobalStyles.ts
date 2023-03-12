import { createGlobalStyle } from "styled-components";

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

  a {
    text-decoration: none;
    color: var(--first-color);
  }

  :root {
    //===== Color =====//
    --first-color: ${({ theme }) => theme.colors.primary};
    --second-color: ${({ theme }) => theme.colors.secondary};
    --second-color-alt: ${({ theme }) => theme.colors.secondaryAlt};
    --third-color: ${({ theme }) => theme.colors.tertiary};
    --third-color-alt: ${({ theme }) => theme.colors.tertiaryAlt};
    --fourth-color: ${({ theme }) => theme.colors.quaternary};
    --alt-color: ${({ theme }) => theme.colors.alternative};
    --bg-alt-color: ${({ theme }) => theme.colors.backgroundAlt};
    --bg-color: ${({ theme }) => theme.colors.background};

    //===== Fonts =====//
    --first-font: ${({ theme }) => theme.fonts.primary}
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
