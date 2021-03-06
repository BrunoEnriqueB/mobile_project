import React, { useEffect, useState } from 'react';
import Modal from 'react-native-modal';
import { Text, ModalProps, View } from 'react-native';
import { Container, Paragraph, Title } from './styles';
import { Input } from '../../../../components/Input';
import { SubmitButton } from '../../../../components/SubmitButton';
import { useAuth } from '../../../../hooks/useAuth';
import { InputContainer } from './styles';
import { PropsModal } from '../../../../domain/propsInterfaces';
import AsyncStorage from '@react-native-async-storage/async-storage';
export function NewPassword({ visible, setNewPasswordVisible, setRequestCode, setSendEmail }: PropsModal) {
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const { sendNewPassword } = useAuth();


  async function handleSubmit() {
    const message = await sendNewPassword(password, confirmPassword);
    if (message) {
      setNewPasswordVisible(false);
      setRequestCode(false);
      setSendEmail(false);
    }
  }

  return (
    <Modal
      backdropOpacity={0}
      onModalHide={async () => {
        setPassword('');
        setConfirmPassword('');
        await AsyncStorage.removeItem('@resetPasswordToken');
      }}
      animationIn={'fadeIn'}
      isVisible={visible}
      onBackdropPress={() => {
        setNewPasswordVisible(false);
      }}
      onBackButtonPress={() => {
        setNewPasswordVisible(false);
      }}
      style={{ justifyContent: 'flex-end', margin: 0 }}
    >
      <Container style={{ borderTopLeftRadius: 25, borderTopRightRadius: 25 }}>
        <Title>
          Nova Senha
        </Title>
        <Paragraph>
          Digite uma nova senha para sua conta e então acessar as vendinhas!
        </Paragraph>
        <InputContainer>
          <Input
            title='Senha'
            value={password}
            onChangeText={setPassword}
            hasIcon={true}
            isPassword={true}
          />
          <Input
            title='Confirmar senha'
            value={confirmPassword}
            onChangeText={setConfirmPassword}
            hasIcon={true}
            isPassword={true}
          />
        </InputContainer>
        <SubmitButton
          borderRadius={28}
          fontSize={52}
          onPress={async () => {
            await handleSubmit();
          }}
          paddingHorizontal={120}
          title={'Enviar'}
        />
      </Container>
    </Modal >
  )
}