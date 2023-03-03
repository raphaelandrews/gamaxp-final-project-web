import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
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
  }
}
