import { NativeStackScreenProps } from '@react-navigation/native-stack';
import React from 'react';

import { View, Text } from 'react-native';
import { TouchableOpacity } from 'react-native';
import { RootStackParamList } from '../../../components/Container';

import { Container, TextLogin, Logo, LoginButton } from './styles';

import { SubmitButton } from '../../../components/SubmitButton';

import { ClickHere } from '../../../components/ClickHere';

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
      <SubmitButton title='Entrar' />
      <Text>Não tem conta?</Text>
      <ClickHere title='Login' onPress={() => {
        handleSubmit();
      }} />
    </Container>
  );
}