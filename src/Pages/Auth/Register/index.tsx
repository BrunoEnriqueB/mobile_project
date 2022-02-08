import React, { useState } from 'react';

import { NativeStackScreenProps } from '@react-navigation/native-stack';

import { Container, TextLogin, InputContainer } from './styles';
import { SubmitButton } from '../../../components/SubmitButton';
import { AuthLabel } from '../../../components/AuthLabel';
import { AuthInput } from '../../../components/AuthInput';
import { Text } from 'react-native';
import { Fonts } from '../../../theme';
import { useAuth } from '../../../hooks/useAuth';
import { AuthParams, RegisterData } from '../../../domain/authTypes';

type Props = NativeStackScreenProps<AuthParams, 'Register'>

export function Register({
  navigation
}: Props) {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [password, setPassword] = useState('');
  const [confirmpassword, setConfirmPassword] = useState('');

  const [emailError, setEmailError] = useState(false);


  const { signUp } = useAuth();

  function handleNavigate() {
    setEmail('');
    setPassword('');
    setPhone('');
    setPassword('');
    setConfirmPassword('');
    navigation.navigate('Login');
  }

  function handleSubmit() {
    const re = /^(([^<>()\\[\]\\.,;:\s@"]+(\.[^<>()\\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (!re.test(String(email).toLowerCase())) {
      setEmailError(true);
      setTimeout(() => {
        setEmailError(false);
      }, 3000)
    }
    const data: RegisterData = { email, name, phone, confirmpassword, password }
    signUp(data);
  }

  return (
    <Container>
      <TextLogin>Criar conta</TextLogin>
      <InputContainer>
        <AuthInput
          icon='person-outline'
          text='Nome'
          autoCompleteType='name'
          textContentType='name'
          value={name}
          onChangeText={setName}
        />
        <AuthInput
          icon='mail-outline'
          text='Email'
          autoCompleteType='email'
          textContentType='emailAddress'
          value={email}
          onChangeText={setEmail}
        />
        {emailError && (
          <Text style={{
            alignSelf: 'flex-end',
            marginRight: 50,
            fontFamily: `${Fonts.robotoR}`,
            color: '#F00'
          }}>Email inválido!</Text>
        )}
        <AuthInput
          icon='call-outline'
          text='Celular'
          autoCompleteType='tel'
          textContentType='telephoneNumber'
          value={phone}
          onChangeText={setPhone}
        />
        <AuthInput
          icon='lock-closed-outline'
          text='Senha'
          autoCompleteType='password'
          textContentType='password'
          securityTextEntry={true}
          value={password}
          onChangeText={setPassword}
        />
        <AuthInput
          icon='lock-closed-outline'
          text='Confirmar senha'
          autoCompleteType='password'
          textContentType='password'
          securityTextEntry={true}
          value={confirmpassword}
          onChangeText={setConfirmPassword}
        />
      </InputContainer>
      <SubmitButton
        title='Criar'
        onPress={() => {
          handleSubmit();
        }}
        borderRadius={70}
        paddingHorizontal={85}
        fontSize={54}
      />
      <AuthLabel title='Register' onPress={() => {
        handleNavigate();
      }} />
    </Container>
  );
}