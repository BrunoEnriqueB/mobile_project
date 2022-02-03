import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { Login } from '../../Pages/Auth/Login';
import { Register } from '../../Pages/Auth/Register';

export type RootStackParamList = {
  Login: undefined;
  Register: undefined
};
const RootStack = createNativeStackNavigator<RootStackParamList>();


export default function Container() {
  return (
    <RootStack.Navigator initialRouteName='Register' screenOptions={{
      headerShown: false
    }}>
      <RootStack.Screen name="Login" component={Login} />
      <RootStack.Screen name="Register" component={Register} />
    </RootStack.Navigator>
  )
}