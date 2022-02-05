import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { Login } from '../pages/Auth/Login';
import { Register } from '../pages/Auth/Register';

export type AuthParams = {
  Login: undefined,
  Register: undefined
}

const Auth = createNativeStackNavigator<AuthParams>();
export function AuthRoutes() {
  return (
    <Auth.Navigator initialRouteName='Login' screenOptions={{ headerShown: false }}>
      <Auth.Screen name='Login' component={Login} />
      <Auth.Screen name='Register' component={Register} />
    </Auth.Navigator>
  )
}