import styled from 'styled-components';

export const Tags = styled.div`
  margin: 0.5rem -0.5rem 0;
  display: flex;
  flex-wrap: wrap;
`;

export const Tag = styled.div`
  display: flex;
  align-items: center;
  padding: 0.5rem;
`;

export const TagIcon = styled.img`
  width: 0.875rem;
  height: 0.875rem;
  margin-right: 0.25rem;
`;

export const TagText = styled.span`
  display: block;
  font-size: 0.875rem;
`;

export const CompanyLogo = styled.div<{ width?: string; height?: string }>`
  width: ${({ width }) => width ?? '3.75rem'};
  height: ${({ height }) => height ?? '3.75rem'};
  overflow: hidden;
  position: relative;

  img {
    object-fit: contain;
    width: 100%;
    height: 100%;
    position: absolute;
    object-position: center;
  }
`;
