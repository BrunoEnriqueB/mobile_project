import { useNavigation } from '@react-navigation/native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import React from 'react';



import { RootStackParamList } from '../../../components/Container';

import { Container } from './styles';
import { Logo, TextLogin } from '../Login/styles';
import { SubmitButton } from '../../../components/SubmitButton';
import { AuthLabel } from '../../../components/AuthLabel';

export function Register({
  route,
  navigation }: NativeStackScreenProps<RootStackParamList, 'Register'>) {

  function handleSubmit() {
    navigation.navigate('Login');
  }

  return (
    <Container>
      <Logo>Logo</Logo>
      <TextLogin>Criar conta</TextLogin>
      <SubmitButton
        title='Criar'
        onPress={() => {
          console.log('Teste')
        }}
        borderRadius={70}
        paddingHorizontal={85}
        fontSize={54}
      />
      <AuthLabel title='Register' onPress={() => {
        handleSubmit();
      }} />
    </Container>
  );
}