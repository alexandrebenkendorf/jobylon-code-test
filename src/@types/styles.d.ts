import 'styled-components';

type Component = {
  backgroundColor?: string;
  color?: string;
};

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
      body: Component;
      header: Component;
      footer: Component;
    };
  }
}
