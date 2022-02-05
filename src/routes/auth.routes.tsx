import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { Home } from '../pages/App/Home';

const App = createNativeStackNavigator();
export function AppRoutes() {
  return (
    <App.Navigator initialRouteName='Home' screenOptions={{ headerShown: false }}>
      <App.Screen name='Home' component={Home} />
    </App.Navigator>
  )
}