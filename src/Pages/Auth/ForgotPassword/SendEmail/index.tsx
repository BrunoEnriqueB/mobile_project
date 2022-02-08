import React, { useState } from 'react';

import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { AuthParams } from '../../../../domain/authTypes';
import { Container, Content, SendEmailButton, SendEmailText } from './styles'
import { InputText } from '../../../../components/AuthInput/styles';
import { AuthInput } from '../../../../components/AuthInput';
import { View } from 'react-native';


type Props = NativeStackScreenProps<AuthParams, 'SendEmail'>;

export function SendEmail({ navigation }: Props) {
  const [email, setEmail] = useState('');

  function handleChangeText() {

  }

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
          <SendEmailButton activeOpacity={0.7}>
            <SendEmailText>
              Enviar
            </SendEmailText>
          </SendEmailButton>
        </View>
      </Content>
    </Container>
  )
}