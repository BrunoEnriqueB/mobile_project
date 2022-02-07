import React from 'react';
import { AuthLabelProps } from '../../domain/propsInterfaces';

import { ClickHere } from '../ClickHere';

import { AuthLabelContainer, LabelText } from './style'

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