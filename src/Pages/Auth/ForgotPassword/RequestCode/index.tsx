import React, { useEffect, useLayoutEffect, useState } from 'react';

import { View, Text } from 'react-native';
import Modal from 'react-native-modal';
import { Container, Paragraph, Title } from './styles';
import { ModalProps } from 'react-native';
import { Content } from '../SendEmail/styles';
import { Code } from '../../../../components/Code';
import { useAuth } from '../../../../hooks/useAuth';

type PropsModal = ModalProps & {
  setVisible: (visible: boolean) => void;
}

export function RequestCode({ visible, setVisible }: PropsModal) {
  const [code, setCode] = useState('');
  const { verifyCode, email } = useAuth();

  async function handleVerifyToken() {
    if (code.length === 5) {
      const message = await verifyCode(email, code);
      if (message) {
        console.log(message);
      }
    }
  }

  useLayoutEffect(() => {
    void handleVerifyToken();
  }, [code])

  useEffect(() => {

  }, [code]);

  return (
    <Modal
      animationIn={'fadeIn'}
      isVisible={visible}
      onBackdropPress={() => {
        setVisible(false)
      }}
      coverScreen={true}
      backdropOpacity={0.6}
      onBackButtonPress={() => {
        setVisible(false);
      }}
      style={{ justifyContent: 'flex-end', margin: 0 }}
    >
      <Container style={{ borderTopLeftRadius: 30, borderTopRightRadius: 30 }}>
        <Content>
          <Title>
            Digite os 5 números
          </Title>
          <Paragraph>
            Digite abaixo os 5 números que você recebeu no seu Email:
          </Paragraph>
        </Content>
        <Code
          setCode={setCode}
        />
      </Container>
    </Modal>
  )
}