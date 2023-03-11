import { ReactNode } from 'react';
import { ThemeProvider as StyledThemeProvider } from 'styled-components';

type Theme = {
  colors: {
    primary: string;
    secondary: string;
    secondaryAlt: string;
    tertiary: string;
    tertiaryAlt: string;
    quaternary: string;
    alternative: string;
    backgroundAlt: string;
    background: string;
  };
  fonts: {
    roboto: string;
  };
};

type ThemeProviderProps = {
  theme: Theme;
  children: ReactNode;
};

export const ThemeProvider = ({ theme, children }: ThemeProviderProps) => (
  <StyledThemeProvider theme={theme}>{children}</StyledThemeProvider>
);
