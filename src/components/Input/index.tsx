import React from 'react';

import { View } from 'react-native';
import { InputProps } from '../../domain/propsInterfaces';
import { InputBox, Title } from './styles';



export function Input({ title, onChangeText, value }: InputProps) {
  return (
    <View style={{ paddingTop: 22, paddingHorizontal: 22 }}>
      <Title>
        {title}
      </Title>
      <InputBox maxLength={254} value={value} onChangeText={onChangeText}>
      </InputBox>
    </View>
  )
}