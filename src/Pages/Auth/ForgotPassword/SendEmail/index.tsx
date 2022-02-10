import React, { useEffect, useState } from 'react';

import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { AuthParams } from '../../../../domain/authTypes';
import { Container, Content, SendEmailButton, SendEmailText } from './styles'
import { useAuth } from '../../../../hooks/useAuth';
import { AuthInput } from '../../../../components/AuthInput';
import { View, Text, Alert } from 'react-native';
import { checkEmailValidated } from '../../../../utils/mask';
import { EmailInvalid } from '../../../../components/EmailInvalid';

type Props = NativeStackScreenProps<AuthParams, 'SendEmail'>;

export function SendEmail({ navigation }: Props) {
  const [email, setEmail] = useState('');
  const [enabledButton, setEnabledButton] = useState(true);
  const [emailError, setEmailError] = useState(false);
  const { sendEmail } = useAuth();

  async function handleSubmit() {
    const checkEmail = checkEmailValidated(email);
    if (checkEmail) {
      setEmailError(true);
      setTimeout(() => {
        setEmailError(false);
      }, 3000)
      return;
    }
    await sendEmail(email);
  }

  function handleTimeButton() {
    setEnabledButton(false);
  }


  return (
    <Container>
      <Content>
        <View style={{ flex: 1, paddingTop: 50 }}>
          <AuthInput
            icon={'mail-outline'}
            text={'Email'}
            onChangeText={setEmail}
            value={email}
            autoCompleteType={'email'}
            maxLenght={254}
            textContentType={'emailAddress'}
          />
          {emailError && (
            < EmailInvalid />
          )}
          <SendEmailButton activeOpacity={0.7} disabled={!enabledButton} onPress={async () => {
            await handleSubmit();
          }}>
            <SendEmailText>
              Enviar
            </SendEmailText>
          </SendEmailButton>
        </View>
      </Content>
    </Container>
  )
}