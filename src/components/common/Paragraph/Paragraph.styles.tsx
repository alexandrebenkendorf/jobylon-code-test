import styled from 'styled-components';

const fontSizes = {
  default: '1rem',
  small: '0.825rem',
};

export const Paragraph = styled.p<{ size?: 'default' | 'small' }>`
  font-size: ${({ size }) => (size ? fontSizes[size] : fontSizes.default)};
  line-height: 1.5;
  &:last-child {
    margin-bottom: 0;
  }
`;
