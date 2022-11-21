import React from 'react';
import { InputLabel, InputStyled } from './Input.styles';

type InputProps = {
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  value: string;
  placeholder?: string;
  label?: string;
};
export function Input({ onChange, value, placeholder, label }: InputProps): React.ReactElement {
  return (
    <InputStyled>
      {label && <InputLabel>{label}</InputLabel>}
      <input type="text" value={value} onChange={onChange} placeholder={placeholder} />
    </InputStyled>
  );
}
