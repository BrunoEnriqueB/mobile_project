import { NativeStackScreenProps } from '@react-navigation/native-stack';
import React from 'react';

import { View, Text } from 'react-native';
import { TouchableOpacity } from 'react-native';
import { RootStackParamList } from '../../../components/Container';

import { Container, TextLogin, Logo, LoginButton, TextButton } from './styles';

import { ButtonSubmit } from '../../../components/ClickHere';

export function Login({
  route,
  navigation
}: NativeStackScreenProps<RootStackParamList, 'Login'>) {
  function handleSubmit() {
    navigation.navigate('Register');
  }

  return (
    <Container>
      <Logo>Logo</Logo>
      <TextLogin>Fazer Login</TextLogin>
      <LoginButton onPress={() => {
        handleSubmit();
      }}>
        <TextButton>Entrar</TextButton>
      </LoginButton>
      <ButtonSubmit title='Clique aqui' onPress={() => {
        handleSubmit()
      }} />
    </Container>
  );
}