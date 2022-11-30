import styled from 'styled-components';

import { Level } from '../../../@types/common';
import theme from '../../../themes/jobylon';

export type HeadingStyledProps = {
  color?: keyof typeof theme.colors;
  level?: Level;
  weight?: string | number;
};

export const HeadingStyled = styled.div<HeadingStyledProps>`
  font-weight: 300;
  margin-bottom: 0;
  color: ${({ theme, color }) => (color ? theme.colors[color] : theme.colors.textHeading)};
  font-size: ${({ theme, level }) => (level ? theme.fontSizes.heading[`h${level}`] : theme.fontSizes.heading.h1)};
  font-weight: ${({ weight }) => weight ?? 600};

  &:first-child {
    margin-top: 0;
  }
`;
