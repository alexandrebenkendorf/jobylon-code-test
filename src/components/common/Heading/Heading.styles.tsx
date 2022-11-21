import styled from 'styled-components';
import theme from '../../../themes/jobylon';

export type HeadingStyledProps = {
  color?: keyof typeof theme.colors;
  level?: 1 | 2 | 3 | 4 | 5 | 6;
  weight?: string | number;
};
const fontSizes = {
  1: '2rem',
  2: '1.5rem',
  3: '1.17rem',
  4: '1rem',
  5: '0.83rem',
  6: '0.67rem',
};
export const HeadingStyled = styled.div<HeadingStyledProps>`
  font-weight: 300;
  margin-bottom: 0;
  color: ${({ theme, color }) => (color ? theme.colors[color] : theme.colors.textHeading)};
  font-size: ${({ level }) => (level ? fontSizes[level] : fontSizes[1])};
  font-weight: ${({ weight }) => weight ?? 600};

  &:first-child {
    margin-top: 0;
  }
`;
