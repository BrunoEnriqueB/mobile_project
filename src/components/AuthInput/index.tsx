import React, { useState } from 'react';
import { TextInputComponent } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

import { InputContainer, InputText, SeePassword } from './styles';

type AuthInputProps = {
  text: string,
  icon: string,
  additional?: string,
  maxLenght: number,
  securityTextEntry?: boolean,
  textContentType?: 'name' | 'emailAddress' | 'password'
  autoCompleteType?: 'name' | 'password' | 'email' | 'tel'
}

export function AuthInput({ text, icon, additional, maxLenght, securityTextEntry = false, textContentType, autoCompleteType }: AuthInputProps) {
  const [isPassword, setIsPassword] = useState(securityTextEntry);

  function handlePassword() {
    isPassword ? setIsPassword(false) : setIsPassword(true);
  }

  return (
    <InputContainer>
      <Icon
        name={icon}
        size={24}
        color={'#00000032'}

      />
      <InputText
        maxLength={maxLenght}
        placeholder={text}
        placeholderTextColor={'#00000032'}
        secureTextEntry={isPassword}
        textContentType={textContentType}
        autoCompleteType={autoCompleteType}
      >
      </InputText>
      {icon === 'lock-closed-outline' && (
        <SeePassword
          activeOpacity={0.6}
          onPress={() => {
            handlePassword();
          }}
        >
          <Icon
            name={'eye-outline'}
            size={24}
            color={'#00000032'}
          />
        </SeePassword>
      )}
    </InputContainer >
  )
}