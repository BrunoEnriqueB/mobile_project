import React from 'react';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Ioicons from 'react-native-vector-icons/Ionicons'
import FontAwesomeIcons from 'react-native-vector-icons/FontAwesome';

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import { Home } from '../pages/App/Home';
import { COLORS, Fonts } from '../theme';

const App = createBottomTabNavigator();

export function AppRoutes() {
  return (
    <App.Navigator
      initialRouteName='Home'
      screenOptions={({ route }) => ({
        headerShown: false,
        tabBarLabelStyle: { fontFamily: `${Fonts.dongleB}`, fontSize: 24, position: 'absolute', bottom: 3 },
        tabBarStyle: { backgroundColor: '#DADFE5', borderRadius: 13, height: 60, justifyContent: 'center', alignItems: 'center' },
        tabBarIconStyle: { paddingBottom: 20 },
        tabBarIcon: (({ color, size, focused }) => {
          if (route.name === 'Home') {
            return <MaterialCommunityIcons name="storefront-outline" size={27} color={focused ? `${COLORS.blue_dark}` : `${COLORS.grey_dark}`} />
          } else if (route.name === 'Profile') {
            return <FontAwesomeIcons name='user-o' size={27} color={focused ? `${COLORS.blue_dark}` : `${COLORS.grey_dark}`} />
          } else if (route.name === 'ShoppingCart') {
            return <Ioicons name='ios-cart-outline' size={27} color={focused ? `${COLORS.blue_dark}` : `${COLORS.grey_dark}`} />
          }
        }),
        tabBarActiveTintColor: `${COLORS.blue_dark}`,

      })}
    >
      <App.Screen
        name='Home'
        component={Home}
        options={{
          tabBarLabel: 'Inicio',
        }}
      />
      <App.Screen
        name='ShoppingCart'
        component={Home}
        options={{
          tabBarLabel: 'Carrinho'
        }}
      />
      <App.Screen
        name='Profile'
        component={Home}
        options={{
          tabBarLabel: 'Perfil'
        }}
      />
    </App.Navigator>
  )
}