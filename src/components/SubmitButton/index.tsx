import React from 'react';
import { Props } from '../../domain/propsInterfaces';

import { ContainerButton, TextLabel } from './styles';


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
      activeOpacity={0.9}
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