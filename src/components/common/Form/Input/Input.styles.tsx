import styled from 'styled-components';

export const InputStyled = styled.div`
  border: 1px solid #e4e4e4;
  border-radius: 0.625rem;
  overflow: hidden;
  padding: 0.375rem 0.625rem;

  & input {
    border: none;
    outline: none;
    font-size: 1rem;
    line-height: 1.6;
    width: 100%;
    display: block;
    border-radius: 0.625rem;

    &::placeholder,
    &::-webkit-input-placeholder {
      color: #b7b7b7;
    }
    &:-ms-input-placeholder {
      color: #b7b7b7;
    }
  }
`;

export const InputLabel = styled.label`
  font-size: 0.75rem;
  display: block;
  color: ${({ theme }) => theme.colors.textHeading};
`;
