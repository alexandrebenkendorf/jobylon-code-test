import styled from 'styled-components';

import { FontSize } from '../../../@types/common';

export const Paragraph = styled.p<{ size?: FontSize }>`
  font-size: ${({ theme, size }) => (size ? theme.fontSizes[size] : theme.fontSizes.default)};
  line-height: 1.5;
  &:last-child {
    margin-bottom: 0;
  }
`;
