import React, { useEffect, useLayoutEffect, useState } from 'react';

import { View, Text } from 'react-native';
import Modal from 'react-native-modal';
import { Container, Paragraph, Title } from './styles';
import { ModalProps } from 'react-native';
import { Content } from '../SendEmail/styles';
import { Code } from '../../../../components/Code';
import { useAuth } from '../../../../hooks/useAuth';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { PropsModal } from '../../../../domain/propsInterfaces';


export function RequestCode({ visible, setRequestCode, setNewPasswordVisible }: PropsModal) {
  const [code, setCode] = useState('');
  const { verifyCode, email } = useAuth();

  async function handleVerifyToken() {
    if (code.length === 5) {
      const message = await verifyCode(email, code);
      setNewPasswordVisible(message);
    }
    setCode('');
  }

  useEffect(() => {
    void handleVerifyToken();
  }, [code]);

  return (
    <Modal
      backdropOpacity={0}
      animationIn={'fadeIn'}
      isVisible={visible}
      onBackdropPress={() => {
        setRequestCode(false)
      }}
      onBackButtonPress={() => {
        setRequestCode(false);
      }}
      onModalHide={async () => {
        await AsyncStorage.removeItem('@resetPasswordToken');
      }}
      coverScreen={true}
      style={{ justifyContent: 'flex-end', margin: 0 }}
    >
      <Container style={{ borderTopLeftRadius: 30, borderTopRightRadius: 30 }}>
        <Content>
          <Title>
            Digite os 5 números
          </Title>
          <Paragraph>
            Digite abaixo os 5 números que você recebeu em: <Text style={{ fontWeight: 'bold' }}>{email}</Text>
          </Paragraph>
        </Content>
        <Code
          setCode={setCode}
        />
      </Container>
    </Modal>
  )
}