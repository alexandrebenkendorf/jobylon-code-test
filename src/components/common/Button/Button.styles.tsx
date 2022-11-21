import styled, { css } from 'styled-components';
import { darken, shade } from 'polished';

import theme from '../../../themes/jobylon';

type Size = 'small' | 'default' | 'big';

export type ButtonStyledProps = {
  color?: keyof typeof theme.colors;
  size?: Size;
};

const sizes = {
  small: {
    fontSize: '0.875rem',
    padding: '0.75rem 0.825rem',
  },
  default: {
    fontSize: '1rem',
    padding: '0.825rem 1rem',
  },
  big: {
    fontSize: '1.125',
    padding: '1rem 1.25rem',
  },
};

export const ButtonStyled = styled.button<ButtonStyledProps>`
  ${({ theme, size, color }) => {
    const bgColor = color ? theme.colors[color] : theme.colors.secondary;
    const bgColorDarker = color ? shade(0.1, theme.colors[color]) : shade(0.1, theme.colors.secondary);
    const textColor = color ? darken(0.5, theme.colors[color]) : darken(0.5, theme.colors.secondary);
    const padding = size ? sizes[size].padding : sizes.default.padding;
    const fontSize = size ? sizes[size].fontSize : sizes.default.fontSize;
    return css`
      padding: ${padding};
      background-color: ${bgColor};
      color: ${textColor};
      font-weight: 500;
      font-size: ${fontSize};
      border-radius: 0.625rem;
      display: inline-block;
      cursor: pointer;
      text-decoration: none;
      transition: all 0.3s;
      border: none;

      &:hover {
        background-color: ${bgColorDarker};
      }
    `;
  }}
`;
