import { NativeStackScreenProps } from '@react-navigation/native-stack';
import React from 'react';

import { View, Text, Button } from 'react-native';
import { RootStackParamList } from '../../../components/Container';

import { styles } from './styles';

export function Login({
  route,
  navigation
}: NativeStackScreenProps<RootStackParamList, 'Login'>) {
  return (
    <View style={styles.container}>
      <Text>Tela de login</Text>
      <Button
        title='Registrar'
        onPress={() => {
          navigation.navigate('Register')
        }}
      />
    </View>
  );
}