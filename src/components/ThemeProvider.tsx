import { ReactNode } from 'react';
import { ThemeProvider as StyledThemeProvider } from 'styled-components';

type Theme = {
  colors: {
    white: string;
    green: string;
    gray: string;
    grey: string;
    black: string;
    dark: string;
    red: string;
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
