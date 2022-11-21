import React from 'react';
import { HeadingAs } from '../../../@types/common';

import { HeadingStyled, HeadingStyledProps } from './Heading.styles';

type HeadingProps = HeadingStyledProps & {
  children: React.ReactNode;
  as?: HeadingAs;  
};
export function Heading({ children, as = 'h1', color, ...rest }: HeadingProps): React.ReactElement {
  return (
    <HeadingStyled as={as} color={color} {...rest}>
      {children}
    </HeadingStyled>
  );
}
