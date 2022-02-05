import React from 'react';

import { Btn, TextRedirectory } from './styles';

const titles = {
  Login: {
    text: 'Cadastre-se'
  },
  Register: {
    text: 'Fazer login'
  }
}
type ClickHereProps = {
  title: 'Login' | 'Register';
  onPress: () => void;
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