import React from 'react';
import { Icon } from 'react-native-vector-icons/Icon';
import { InputContainer, InputText } from './styles';

type AuthInputProps = {
  text: string,
  icon: Icon,
  additional?: Icon
}

export function AuthInput({ text, icon, additional }: AuthInputProps) {
  return (
    <InputContainer>
      <InputText>
        {text}
      </InputText>
    </InputContainer>
  )
}