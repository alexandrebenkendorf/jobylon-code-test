import { darken } from 'polished';
import styled from 'styled-components';

import { Container } from '../../common/Container';

export const FooterStyled = styled.footer`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 3.75rem;
  color: ${({ theme }) => darken(0.5, theme.colors.primary)};
  background-color: ${({ theme }) => theme.colors.primary};
  font-size: 0.75rem;
`;
export const FooterContainer = styled(Container)`
  text-align: center;
`;
