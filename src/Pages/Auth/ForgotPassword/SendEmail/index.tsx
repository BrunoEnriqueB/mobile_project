import React, { useEffect, useState } from 'react';

import { Container, Content, InválidEmailText, Paragraph, Title } from './styles'
import { useAuth } from '../../../../hooks/useAuth';
import { ModalProps, View } from 'react-native';
import Modal from 'react-native-modal';
import { Input } from '../../../../components/Input';
import { SubmitButton } from '../../../../components/SubmitButton';
import { checkEmailValidated } from '../../../../utils/mask';
import { EmailInvalid } from '../../../../components/EmailInvalid';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { AuthParams } from '../../../../domain/authTypes';


type PropsModal = ModalProps & {
  setVisible: (visible: boolean) => void;
  setRequestCodeVisible: (visible: boolean) => void;
}

export function SendEmail({ visible, setVisible, setRequestCodeVisible }: PropsModal) {
  const { sendEmail } = useAuth();
  const [emailError, setEmailError] = useState(false);
  const [email, setEmail] = useState('');
  const [disabledSubmit, setDisabledSubmit] = useState(false);

  async function handleSubmit() {
    const checkEmail = checkEmailValidated(email);
    if (checkEmail) {
      setEmailError(true);
      setTimeout(() => {
        setEmailError(false);
      }, 3000)
      return;
    }
    setDisabledSubmit(true);
    const message = await sendEmail(email);
    if (message) {
      setRequestCodeVisible(true);
    }
    setDisabledSubmit(false);
  }

  useEffect(() => {

  }, [disabledSubmit])

  return (

    <Modal
      animationIn={'fadeIn'}
      isVisible={visible}
      onBackdropPress={() => {
        setVisible(false)
      }}
      onModalHide={() => {
        setEmail('');
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
            Esqueceu a senha?
          </Title>
          <Paragraph>
            Digite seu email para receber o código de renovação de senha.
          </Paragraph>
          <View style={{ flexDirection: 'column', alignItems: 'center' }}>
            <Input
              title='E-mail'
              onChangeText={setEmail}
              value={email}
            />
            <InválidEmailText>
              {emailError && (
                <EmailInvalid />
              )}
            </InválidEmailText>
            <SubmitButton
              disabled={disabledSubmit}
              title={'Enviar'}
              borderRadius={28}
              fontSize={52}
              paddingHorizontal={120}
              onPress={async () => {
                await handleSubmit()
              }}
            />
          </View>
        </Content>
      </Container>
    </Modal>


  )
}