import React from 'react';

import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { Login } from '../pages/Auth/Login';
import { Register } from '../pages/Auth/Register';
import { SendEmail } from '../pages/Auth/ForgotPassword/SendEmail';

import { HeaderBackImage } from '../components/HeaderBackImage';

import { AuthParams } from '../domain/authTypes';
import { COLORS } from '../theme';
import { NativeScreen } from 'react-native-screens';

const Auth = createNativeStackNavigator<AuthParams>();
export function AuthRoutes() {
  return (
    <Auth.Navigator initialRouteName='Login' >
      <Auth.Screen name='Login' component={Login} options={{ headerShown: false }} />
      <Auth.Screen name='Register' component={Register} options={{ headerShown: false }} />
      <Auth.Screen name='SendEmail' component={SendEmail} options={{
        title: '',
        headerStyle: {
          backgroundColor: `${COLORS.white_light}`
        },
        headerShadowVisible: false,
      }} />

    </Auth.Navigator>
  )
}