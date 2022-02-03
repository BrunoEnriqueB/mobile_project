import { NativeStackScreenProps } from '@react-navigation/native-stack';
import React from 'react';

import { View, Text } from 'react-native';
import { TouchableOpacity } from 'react-native';
import { RootStackParamList } from '../../../components/Container';

import { Container, TextLogin, Logo, LoginButton } from './styles';

import { SubmitButton } from '../../../components/SubmitButton';
import { AuthLabel } from '../../../components/AuthLabel';

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
      <SubmitButton title='Entrar' onPress={() => {
        console.log('Teste')
      }} />
      <AuthLabel title='Login' onPress={() => {
        handleSubmit();
      }} />
    </Container>
  );
}