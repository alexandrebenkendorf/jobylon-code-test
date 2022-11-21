import styled from 'styled-components';

export const Tile = styled.div`
  display: block;
  background-color: white;
  border-radius: 0.625rem;
  overflow: hidden;
  padding: 0.625rem 0.75rem;
  transition: 0.3s all;
  box-shadow: 0px 1px 2px rgba(0, 0, 0, 0.05);

  &:hover {
    box-shadow: 0px 8px 12px rgba(0, 0, 0, 0.05);
    transform: translateY(-2px);
  }
`;
