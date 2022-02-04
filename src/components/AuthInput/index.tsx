import React, { useState } from 'react';
import { TextInputComponent } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

import { InputContainer, InputText, SeePassword } from './styles';

type AuthInputProps = {
  text: string,
  icon: string,
  maxLenght?: number,
  securityTextEntry?: boolean,
  textContentType?: 'name' | 'emailAddress' | 'password' | 'telephoneNumber'
  autoCompleteType?: 'name' | 'password' | 'email' | 'tel'
}

export function AuthInput({ text, icon, maxLenght = 40, securityTextEntry = false, textContentType, autoCompleteType }: AuthInputProps) {
  const [isPassword, setIsPassword] = useState(securityTextEntry);
  const [passwordIcon, setPasswordIcon] = useState('eye-outline')

  function handlePassword() {
    if (isPassword) {
      setIsPassword(false);
      setPasswordIcon('eye-off-outline');
    } else {
      setIsPassword(true);
      setPasswordIcon('eye-outline');
    }

  }

  return (
    <InputContainer>
      <Icon
        name={icon}
        size={24}
        color={'rgba(0, 0, 0, 0.3)'}

      />
      <InputText
        maxLength={maxLenght}
        placeholder={text}
        placeholderTextColor={'rgba(0, 0, 0, 0.3)'}
        secureTextEntry={isPassword}
        textContentType={textContentType}
        autoCompleteType={autoCompleteType}
      >
      </InputText>
      {icon === 'lock-closed-outline' && (
        <SeePassword
          activeOpacity={0.75}
          onPress={() => {
            handlePassword();
          }}
        >
          <Icon
            name={passwordIcon}
            size={24}
            color={'#00000032'}
          />
        </SeePassword>
      )}
    </InputContainer >
  )
}