import React from 'react';

import { Logo } from '../Logo';

import { HeaderContainer, HeaderStyled } from './Header.styles';
import { Navbar } from './Navbar';

export function Header(): React.ReactElement {
  return (
    <HeaderStyled data-testid="header">
      <HeaderContainer>
        <Logo />
        <Navbar />
      </HeaderContainer>
    </HeaderStyled>
  );
}
