import React from 'react';

import { ContainerButton, TextLabel } from './styles';

type Props = {
  title: string;
  onPress: () => void;
  borderRadius: number;
  fontSize: number;
  paddingHorizontal: number;
}

export function SubmitButton({ title, onPress, borderRadius, fontSize, paddingHorizontal }: Props) {
  return (

    <ContainerButton
      style={{
        borderRadius: borderRadius,
        height: fontSize,
      }}
      onPress={() => {
        onPress();
      }}
    >
      <TextLabel style={{
        marginHorizontal: paddingHorizontal,
        fontSize: fontSize,
      }}>
        {title}
      </TextLabel>
    </ContainerButton>
  )
}