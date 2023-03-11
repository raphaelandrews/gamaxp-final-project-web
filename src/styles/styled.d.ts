import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
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
  }
}
