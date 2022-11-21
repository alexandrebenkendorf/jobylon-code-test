import styled from 'styled-components';

import { MAX_WIDTH, MEDIA_QUERIES } from '../../../constants/common';
import { CssValue } from '../../../@types/common';

type ContainerProps = {
  maxWidth?: CssValue;
  fullWidth?: boolean;
};
export const Container = styled.div<ContainerProps>`
  width: 100%;
  max-width: ${({ maxWidth, fullWidth }) => (fullWidth ? 'none' : maxWidth ?? MAX_WIDTH)};
  padding: 0 1rem;
  
  @media ${MEDIA_QUERIES.TABLET} {
    padding: 0;
  }
`;
