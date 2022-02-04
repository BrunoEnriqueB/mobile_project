import { useNavigation } from '@react-navigation/native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import React from 'react';



import { RootStackParamList } from '../../../components/Container';

import { Container } from './styles';
import { TextLogin } from './styles';
import { SubmitButton } from '../../../components/SubmitButton';
import { AuthLabel } from '../../../components/AuthLabel';
import { AuthInput } from '../../../components/AuthInput';

export function Register({
  route,
  navigation }: NativeStackScreenProps<RootStackParamList, 'Register'>) {

  function handleSubmit() {
    navigation.navigate('Login');
  }

  return (
    <Container>
      <TextLogin>Criar conta</TextLogin>
      <AuthInput
        icon='person-outline'
        text='Nome'
        autoCompleteType='name'
        textContentType='name'
      />
      <AuthInput
        icon='mail-outline'
        text='Email'
        autoCompleteType='email'
        textContentType='emailAddress'
      />
      <AuthInput
        icon='call-outline'
        text='Celular'
        autoCompleteType='tel'
        textContentType='telephoneNumber'
      />
      <AuthInput
        icon='lock-closed-outline'
        text='Senha'
        autoCompleteType='password'
        textContentType='password'
        securityTextEntry={true}
      />
      <AuthInput
        icon='lock-closed-outline'
        text='Confirmar senha'
        autoCompleteType='password'
        textContentType='password'
        securityTextEntry={true}
      />
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