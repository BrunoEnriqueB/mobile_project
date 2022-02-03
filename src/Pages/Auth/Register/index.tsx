import { useNavigation } from '@react-navigation/native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import React from 'react';

import { View, Text, Button } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { RootStackParamList } from '../../../components/Container';

import { styles } from './styles';

export function Register({
  route,
  navigation }: NativeStackScreenProps<RootStackParamList, 'Register'>) {

  return (
    <View style={styles.container}>
      <Text>Tela de Registro</Text>
      <Button
        title="Login"
        onPress={() => {
          navigation.navigate('Login')
        }}
      />
    </View>
  );
}