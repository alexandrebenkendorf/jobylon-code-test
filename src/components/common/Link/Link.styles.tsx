import styled from 'styled-components';

export const ExternalLink = styled.a<{ color?: 'primary' | 'secondary' }>`
  font-weight: 500;
  color: ${({ theme, color }) => (color ? theme.colors[color] : theme.colors.primary)};
  
  &:visited,
  &:active,
  &:focus {
    color: ${({ theme, color }) => (color ? theme.colors[color] : theme.colors.primary)};
  }
`;
