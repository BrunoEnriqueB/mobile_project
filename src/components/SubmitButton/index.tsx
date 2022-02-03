import React from 'react';

import { ContainerButton, TextLabel } from './styles';

export function SubmitButton({ title }: { title: string }) {
  return (
    <ContainerButton>
      <TextLabel>
        {title}
      </TextLabel>
    </ContainerButton>
  )
}