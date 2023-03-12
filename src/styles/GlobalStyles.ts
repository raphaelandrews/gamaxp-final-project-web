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

    //===== Font-size =====//
    --fs-1: ${({ theme }) => theme.fontSizes.fontSize1};
    --fs-2: ${({ theme }) => theme.fontSizes.fontSize2};
    --fs-3: ${({ theme }) => theme.fontSizes.fontSize3};
    --fs-4: ${({ theme }) => theme.fontSizes.fontSize4};
    --fs-5: ${({ theme }) => theme.fontSizes.fontSize5};
    --fs-6: ${({ theme }) => theme.fontSizes.fontSize6};
    --fs-7: ${({ theme }) => theme.fontSizes.fontSize7};
    --fs-8: ${({ theme }) => theme.fontSizes.fontSize8};
    --fs-9: ${({ theme }) => theme.fontSizes.fontSize9};
    --fs-10: ${({ theme }) => theme.fontSizes.fontSize10};
    --fs-11: ${({ theme }) => theme.fontSizes.fontSize11};
    --fs-12: ${({ theme }) => theme.fontSizes.fontSize12};
    --fs-13: ${({ theme }) => theme.fontSizes.fontSize13};
    --fs-14: ${({ theme }) => theme.fontSizes.fontSize14};
    --fs-15: ${({ theme }) => theme.fontSizes.fontSize15};

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
