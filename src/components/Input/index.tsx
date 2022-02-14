import React, { useState } from 'react';

import { View } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { InputProps } from '../../domain/propsInterfaces';
import { Container, InputBox, InputContainer, SeePassword, Title } from './styles';



export function Input({ title, onChangeText, value, isPassword, hasIcon }: InputProps) {
  const [eyeIcon, seteyeIcon] = useState('eye-off-outline');
  const [password, setPassword] = useState(isPassword)

  return (
    <Container style={{ paddingTop: 22, paddingHorizontal: 22 }}>
      <Title >
        {title}
      </Title>
      <InputContainer>
        <InputBox
          maxLength={40}
          value={value}
          onChangeText={onChangeText}
          secureTextEntry={password}>
        </InputBox>
        {hasIcon && (
          <SeePassword activeOpacity={0.6}>
            <Icon
              name={eyeIcon}
              size={24}
              color={'#00000032'}
              onPress={() => {
                if (password) {
                  setPassword(false);
                  seteyeIcon('eye-off-outline');
                } else {
                  setPassword(true);
                  seteyeIcon('eye-outline');
                }
              }}
            />
          </SeePassword>
        )
        }
      </InputContainer>
    </Container>
  )
}