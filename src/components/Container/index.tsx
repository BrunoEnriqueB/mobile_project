import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { ThemeProvider } from 'styled-components/native';

import { Login } from '../../Pages/Auth/Login';
import { Register } from '../../Pages/Auth/Register';

import { authTheme } from './styles';

export type RootStackParamList = {
  Login: undefined;
  Register: undefined
};
const RootStack = createNativeStackNavigator<RootStackParamList>();


export default function Container() {
  return (
    <ThemeProvider theme={authTheme}>
      <RootStack.Navigator initialRouteName='Login' screenOptions={{
        headerShown: false
      }}>
        <RootStack.Screen name="Login" component={Login} />
        <RootStack.Screen name="Register" component={Register} />
      </RootStack.Navigator>
    </ThemeProvider>
  )
}