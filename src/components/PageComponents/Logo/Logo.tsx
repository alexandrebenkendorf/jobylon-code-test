import React from 'react';
import { NavLink } from 'react-router-dom';

import { LOGO_URL } from '../../../constants/common';

import { LogoStyled } from './Logo.styles';

export function Logo(): React.ReactElement {
  return (
    <NavLink to="/">
      <LogoStyled src={LOGO_URL} alt="Logo Jobylon" title="Navigate to the home page"></LogoStyled>
    </NavLink>
  );
}
