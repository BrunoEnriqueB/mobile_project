import { NativeStackScreenProps } from '@react-navigation/native-stack';
import React from 'react';

import { RootStackParamList } from '../../../components/Container';

import { Container, TextLogin, Logo } from './styles';

import { SubmitButton } from '../../../components/SubmitButton';
import { AuthLabel } from '../../../components/AuthLabel';

export function Login({
  navigation
}: NativeStackScreenProps<RootStackParamList, 'Login'>) {

  function handleSubmit() {
    navigation.navigate('Register');
  }

  return (
    <Container>
      <Logo>Logo</Logo>
      <TextLogin>Fazer Login</TextLogin>
      <SubmitButton
        title='Entrar'
        onPress={() => {
          console.log('Teste')
        }}
        borderRadius={70}
        paddingHorizontal={85}
        fontSize={54}
      />
      <AuthLabel title='Login' onPress={() => {
        handleSubmit();
      }} />
    </Container>
  );
}