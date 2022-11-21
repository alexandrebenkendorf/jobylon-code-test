import React from 'react';

import { ButtonAs } from '../../../@types/common';

import { ButtonStyled, ButtonStyledProps } from './Button.styles';

type ButtonProps = ButtonStyledProps & {
  children: React.ReactNode;
  as?: ButtonAs;
  href?: string;
  onClick?: () => void;
  target?: 'blank';
};
export function Button({ children, as, href, target, onClick, ...rest }: ButtonProps): React.ReactElement {
  return (
    <ButtonStyled as={as} href={href} target={target} onClick={onClick} {...rest}>
      {children}
    </ButtonStyled>
  );
}
