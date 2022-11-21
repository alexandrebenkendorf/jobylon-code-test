import { Link } from 'react-router-dom';
import styled, { css } from 'styled-components';

import { CssValue } from '../../@types/common';
import { MEDIA_QUERIES } from '../../constants/common';

export const Divisor = styled.div<{ gap?: CssValue; hideLine?: boolean }>`
  display: block;
  padding: ${({ gap }) => gap ?? '1rem'} 0;
  position: relative;

  ${({ hideLine }) => {
    if (!hideLine) {
      return css`
        &:before {
          content: '';
          border-bottom: 1px solid #eeeeee;
          position: absolute;
          top: 50%;
          transform: translateY(-50%);
          width: 100%;
        }
      `;
    }
  }}
`;

export const LinkStyled = styled(Link)`
  color: ${({ theme }) => theme.colors.primary};
`;

function getHiddenCss(mq: keyof typeof MEDIA_QUERIES) {
  return css`
    @media ${MEDIA_QUERIES[mq]} {
      display: none;
    }
  `;
}
export const Hidden = styled.div<{ MOBILE?: boolean; TABLET?: boolean; DESKTOP?: boolean }>`
  ${({ MOBILE, TABLET, DESKTOP }) => {
    let returnCss = '';

    if (MOBILE) {
      returnCss += getHiddenCss('MOBILE');
    }
    if (TABLET) {
      returnCss += getHiddenCss('TABLET');
    }
    if (DESKTOP) {
      returnCss += getHiddenCss('DESKTOP');
    }
    return returnCss;
  }}
`;
