import React from 'react';
import { ClickHereProps } from '../../domain/propsInterfaces';

import { Btn, TextRedirectory } from './styles';

const titles = {
  Login: {
    text: 'Cadastre-se'
  },
  Register: {
    text: 'Fazer login'
  }
}

export function ClickHere({ title, onPress }: ClickHereProps) {
  const { text } = titles[title];

  return (
    <Btn activeOpacity={0.7} onPress={() => {
      onPress();
    }}>
      <TextRedirectory
      >
        {text}
      </TextRedirectory>
    </Btn>
  );
}