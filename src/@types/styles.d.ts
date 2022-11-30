import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    id: string;
    colors: {
      body: string;
      primary: string;
      primaryLight: string;
      primaryLighter: string;
      secondary: string;
      secondaryDark: string;
      textHeading: string;
      textBody: string;
      white: string;
      black: string;
    };
    components: {
      [key: string]: Component;
    };
    fontSizes: {
      xxsmall: string;
      xsmall: string;
      small: string;
      default: string;
      large: string;
      heading: {
        h1: string;
        h2: string;
        h3: string;
        h4: string;
        h5: string;
        h6: string;
      };
    };
  }
}
