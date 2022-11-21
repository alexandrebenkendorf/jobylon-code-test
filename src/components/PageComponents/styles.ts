import styled from 'styled-components';

import bg from '../../assets/img/bg.svg';

export const Main = styled.main`
  display: flex;
  flex-direction: column;
  flex: 1;
  align-items: center;
  padding: 2rem 0;
  position: relative;
  overflow: hidden;

  &:before {
    position: absolute;
    content: '';
    background: url(${bg});
    background-size: cover;
    background-position: center top;
    width: 100%;
    min-height: 100vh;
    height: 100%;
    top: 20vh;
    left: 0;
    z-index: -1;
    opacity: 0.5;
  }
`;
