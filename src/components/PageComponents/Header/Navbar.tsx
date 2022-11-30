import React from 'react';

import { Button, Hidden } from '../../common';

import { NavbarItemStyled, NavbarStyled } from './Navbar.styles';

export function Navbar(): React.ReactElement {
  return (
    <NavbarStyled>
      <NavbarItemStyled>
        <Hidden MOBILE style={{ paddingRight: 10 }}>
          Are you recruiting?
        </Hidden>
        <Button size="small">Advertise now</Button>
      </NavbarItemStyled>
      <NavbarItemStyled>
        <Button color="primary" size="small">
          Login
        </Button>
      </NavbarItemStyled>
    </NavbarStyled>
  );
}
