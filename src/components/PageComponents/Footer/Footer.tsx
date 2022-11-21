import React from 'react';

import { FooterContainer, FooterStyled } from './Footer.styles';

type FooterProps = {
  children: React.ReactNode;
};
export function Footer({ children }: FooterProps): React.ReactElement {
  return (
    <FooterStyled data-testid="footer">
      <FooterContainer>{children}</FooterContainer>
    </FooterStyled>
  );
}
