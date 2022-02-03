import React from 'react';

import { ContainerButton, TextLabel } from './styles';

type Props = {
  title: string,
  onPress: () => void
}

export function SubmitButton({ title, onPress }: Props) {
  return (

    <ContainerButton onPress={() => {
      onPress();
    }}>
      <TextLabel>
        {title}
      </TextLabel>
    </ContainerButton>
  )
}