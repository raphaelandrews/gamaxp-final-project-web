import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    colors: {
      white: string;
      green: string;
      greenAlt: string;
      gray: string;
      grey: string;
      black: string;
      dark: string;
      red: string;
      redAlt: string;
    };
    fonts: {
      roboto: string;
    };
  }
}
