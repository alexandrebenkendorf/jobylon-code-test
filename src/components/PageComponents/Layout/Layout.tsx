import React from 'react';
import { ThemeProvider } from 'styled-components';

import GlobalStyle from '../../../globalStyles';
import theme from '../../../themes/jobylon';
import { Footer } from '../Footer';
import { Header } from '../Header';
import { LayoutStyled } from './Layout.styles';
import { Main } from '../styles';

export function Layout({ children }: { children: React.ReactNode }): React.ReactElement {
  return (
    <ThemeProvider theme={theme}>
      <LayoutStyled data-testid="layout">
        <GlobalStyle />
        <Header />
        <Main data-testid="main">{children}</Main>
        <Footer>Copyright 2022 - Alexandre Benkendorf</Footer>
      </LayoutStyled>
    </ThemeProvider>
  );
}
