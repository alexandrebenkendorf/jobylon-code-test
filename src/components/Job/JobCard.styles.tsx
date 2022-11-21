import { Link } from 'react-router-dom';
import styled from 'styled-components';

import { GUTTER } from '../../constants/common';
import { Heading } from '../common';
import { Tile } from '../common/Tile';

export const JobCardWrapper = styled.div`
  padding: ${GUTTER};
`;

export const JobCardLink = styled(Link)`
  text-decoration: none;
  color: inherit;
`;

export const JobCardStyled = styled(Tile)``;

export const JobCardContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

export const JobCardInfo = styled.div`
  flex: 1;
`;

export const JobCardTitle = styled(Heading)`
  font-size: 1.125rem;
  margin: 0 0 0.5rem;
`;
export const JobCardCompany = styled.span`
  display: block;
  font-size: 0.875rem;
`;
