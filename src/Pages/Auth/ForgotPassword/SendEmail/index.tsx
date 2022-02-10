import React, { useEffect, useState } from 'react';

import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { AuthParams } from '../../../../domain/authTypes';
import { Container, Content, SendEmailButton, SendEmailText } from './styles'
import { useAuth } from '../../../../hooks/useAuth';
import { AuthInput } from '../../../../components/AuthInput';
import { View, Text, Alert } from 'react-native';

type Props = NativeStackScreenProps<AuthParams, 'SendEmail'>;

export function SendEmail({ navigation }: Props) {
  const [email, setEmail] = useState('');
  const [enabledButton, setEnabledButton] = useState(false);
  const [buttonSubmited, setButtonSubmited] = useState(false);
  const [time, setTime] = useState(30);
  const { sendEmail } = useAuth();

  // async function handleSubmit() {
  //   const re = /^(([^<>()\\[\]\\.,;:\s@"]+(\.[^<>()\\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  //   if (!re.test(String(email).toLowerCase())) {
  //     Alert.alert('Email inválido!');
  //     return;
  //   }
  //   setEnabledButton(true);
  //   const sendmail = await sendEmail(email);
  //   if (sendmail) {
  //     setEnabledButton(false);
  //   } else {
  //     setButtonSubmited(true);
  //   }
  //   setButtonSubmited(false);
  //   setTime(30);
  // }

  // function handleTimeButton() {
  //   setEnabledButton(true);
  // }

  // useEffect(() => {
  //   let interval: number;
  //   let i = time;
  //   if (enabledButton && buttonSubmited) {
  //     interval = setInterval(() => {
  //       setTime(time => time - 1);
  //       if (i <= 0) {
  //         clearInterval(interval!);
  //         setEnabledButton(false);
  //       }
  //       i--;
  //     }, 1000)
  //   }
  // }, [enabledButton, buttonSubmited])


  return (
    <Container>
      <Content>
        <View style={{ flex: 1, paddingTop: 50, justifyContent: 'space-between' }}>
          <AuthInput
            icon={'mail-outline'}
            text={'Email'}
            onChangeText={setEmail}
            value={email}
            autoCompleteType={'email'}
            maxLenght={254}
            textContentType={'emailAddress'}
          />
          <SendEmailButton activeOpacity={0.7} disabled={true} onPress={() => {
            // handleSubmit();
          }}>
            <SendEmailText>
              Enviar
            </SendEmailText>
          </SendEmailButton>
          {enabledButton && (
            <Text style={{ position: 'absolute', bottom: 0, right: 0 }}>
              Aguarde {time} segundos
            </Text>
          )}
        </View>
      </Content>
    </Container>
  )
}