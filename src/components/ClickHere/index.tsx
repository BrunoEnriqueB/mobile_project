import { useNavigation } from '@react-navigation/native';
import React from 'react';

import { Btn, TextBtn } from './styles';

export function ButtonSubmit({ title, onPress }: { title: string, onPress: }) {
  const navigation = useNavigation();
  return (
    <Btn onPress={() => {
      onPress
    }}>
      <TextBtn>
        {title}
      </TextBtn>
    </Btn>
  );
}