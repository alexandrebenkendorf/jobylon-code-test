import styled from 'styled-components';

const SectionStyled = styled.section`
  padding: 0;
`;

export const Section = styled(SectionStyled)`
  & + ${SectionStyled} {
    padding-top: 2.5rem;
  }
`;

export const SectionContainer = styled.div`
  padding: 1rem 0;
`;

export const SectionCTA = styled(Section)`
  background-color: ${({ theme }) => theme.colors.primaryLighter};
  color: ${({ theme }) => theme.colors.textHeading};
  padding: 2rem;
  text-align: center;
`;
