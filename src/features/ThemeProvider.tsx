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
    primary: string;
  };
  fontSizes: {
    fontSize1: string;
    fontSize2: string;
    fontSize3: string;
    fontSize4: string;
    fontSize5: string;
    fontSize6: string;
    fontSize7: string;
    fontSize8: string;
    fontSize9: string;
    fontSize10: string;
    fontSize11: string;
    fontSize12: string;
    fontSize13: string;
    fontSize14: string;
    fontSize15: string;
  };
};

type ThemeProviderProps = {
  theme: Theme;
  children: ReactNode;
};

export const ThemeProvider = ({ theme, children }: ThemeProviderProps) => (
  <StyledThemeProvider theme={theme}>{children}</StyledThemeProvider>
);
