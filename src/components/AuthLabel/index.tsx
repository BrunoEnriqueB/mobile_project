import React from 'react';
import { ClickHere } from '../ClickHere';

import { AuthLabelContainer, LabelText } from './style'

type AuthLabelProps = {
  title: 'Login' | 'Register';
  onPress: () => void;
}

export function AuthLabel({ title, onPress }: AuthLabelProps) {
  return (
    <AuthLabelContainer>
      {title === 'Login'
        ? (<LabelText>Não tem cadastro?</LabelText>)
        : (<LabelText>Já tem uma conta?</LabelText>)
      }
      <ClickHere title={title} onPress={onPress} />
    </AuthLabelContainer>

  )
}