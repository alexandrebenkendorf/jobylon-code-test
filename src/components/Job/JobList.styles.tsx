import styled from 'styled-components';

import { GUTTER, MEDIA_QUERIES } from '../../constants/common';

export const JobCardListStyled = styled.div`
  display: flex;
  flex-direction: column;
  margin: -${GUTTER};
  padding-top: 2rem;
`;

export const FilterWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin: -0.5rem;
  width: auto;

  @media ${MEDIA_QUERIES.TABLET} {
    flex-wrap: nowrap;
  }
`;

export const FilterItem = styled.div`
  padding: 0.5rem;
  width: 100%;
  flex: 100%;

  @media ${MEDIA_QUERIES.TABLET} {
    flex: 1;
  }
`;
