import React, { useState } from 'react';
import Icon from 'react-native-vector-icons/Ionicons';

import MaskInput, { Masks } from 'react-native-mask-input';

import { InputContainer, InputText, SeePassword } from './styles';
import { COLORS, Fonts } from '../../theme';
import { AuthInputProps } from '../../domain/propsInterfaces';

export function AuthInput({ text, icon, maxLenght = 40, securityTextEntry = false, textContentType, autoCompleteType, value, onChangeText }: AuthInputProps) {
  const [isPassword, setIsPassword] = useState(securityTextEntry);
  const [passwordIcon, setPasswordIcon] = useState('eye-outline');

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
      {text === 'Celular'
        ? (<MaskInput
          maxLength={maxLenght}
          placeholder={text}
          placeholderTextColor={'rgba(0, 0, 0, 0.3)'}
          secureTextEntry={isPassword}
          textContentType={textContentType}
          onChangeText={onChangeText}
          value={value}
          mask={Masks.BRL_PHONE}
          style={{
            width: 200,
            fontFamily: `${Fonts.robotoR}`,
            fontSize: 16,
            marginLeft: 10,
            color: `${COLORS.black}`,
            opacity: .6,
          }}

        />)
        : (<InputText
          maxLength={maxLenght}
          placeholder={text}
          placeholderTextColor={'rgba(0, 0, 0, 0.3)'}
          secureTextEntry={isPassword}
          textContentType={textContentType}
          autoCompleteType={autoCompleteType}
          onChangeText={onChangeText}
          value={value}
        >
        </InputText>)
      }

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