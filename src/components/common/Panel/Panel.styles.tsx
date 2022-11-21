import styled from 'styled-components';
import { Tile } from '../Tile';

const shadow = '0px 8px 16px rgba(0, 0, 0, 0.07)';

export const Panel = styled(Tile)`
  box-shadow: ${shadow};
  padding: 0;

  &:hover {
    box-shadow: ${shadow};
    transform: none;
  }
`;

export const PanelContainer = styled.div`
  padding: 2rem;
`;

export const PanelHeader = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
`;
