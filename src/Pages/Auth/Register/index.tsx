import React, { useState } from 'react';

import { NativeStackScreenProps } from '@react-navigation/native-stack';

import { Container, TextLogin, InputContainer, InválidEmailText } from './styles';
import { SubmitButton } from '../../../components/SubmitButton';
import { AuthLabel } from '../../../components/AuthLabel';
import { AuthInput } from '../../../components/AuthInput';
import { useAuth } from '../../../hooks/useAuth';
import { AuthParams, RegisterData } from '../../../domain/authTypes';
import { checkEmailValidated } from '../../../utils/mask';
import { EmailInvalid } from '../../../components/EmailInvalid';

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
    const checkEmail = checkEmailValidated(email);
    if (checkEmail) {
      setEmailError(true);
      setTimeout(() => {
        setEmailError(false);
      }, 3000)
      return;
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
        <InválidEmailText>
          {emailError && (
            <EmailInvalid />
          )}
        </InválidEmailText>
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