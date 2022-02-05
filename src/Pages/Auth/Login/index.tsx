import { NativeStackScreenProps } from '@react-navigation/native-stack';
import React, { useState } from 'react';

import { Container, TextLogin, Logo, ForgotPassword, ForgotPasswordText } from './styles';

import { SubmitButton } from '../../../components/SubmitButton';
import { AuthLabel } from '../../../components/AuthLabel';
import { AuthInput } from '../../../components/AuthInput';
import { AuthParams } from '../../../routes/app.routes';
import { useAuth } from '../../../hooks/useAuth';

type Props = NativeStackScreenProps<AuthParams, 'Register'>

export function Login({
  navigation
}: Props) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { signIn } = useAuth();

  function handleNavigate() {
    setEmail('');
    setPassword('');
    navigation.navigate('Register');
  }

  function handleSubmit() {
    const data = { email, password }
    signIn(data);
  }

  return (
    <Container>
      <Logo>Logo</Logo>
      <TextLogin>Fazer Login</TextLogin>
      <AuthInput
        icon='mail-outline'
        text='Email'
        maxLenght={254}
        textContentType={'name'}
        value={email}
        onChangeText={setEmail}
      />
      <AuthInput
        icon='lock-closed-outline'
        text='Senha'
        maxLenght={40}
        securityTextEntry={true}
        textContentType={'password'}
        value={password}
        onChangeText={setPassword}
      />
      <ForgotPassword activeOpacity={0.7} onPress={() => console.log(password)}>
        <ForgotPasswordText>Esqueceu a senha?</ForgotPasswordText>
      </ForgotPassword>
      <SubmitButton
        title='Entrar'
        onPress={() => {
          handleSubmit();
        }}
        borderRadius={70}
        paddingHorizontal={85}
        fontSize={54}
      />
      <AuthLabel title='Login' onPress={() => {
        handleNavigate();
      }} />
    </Container>
  );
}