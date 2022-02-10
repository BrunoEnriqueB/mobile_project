import React from 'react';

import { AuthRoutes } from './auth.routes';
import { AppRoutes } from './app.routes';
import { NavigationContainer } from '@react-navigation/native';
import { useAuth } from '../hooks/useAuth';

export function Routes() {
  const { authorized } = useAuth();
  return (
    <NavigationContainer >
      {authorized
        ? <AppRoutes />
        : <AuthRoutes />
      }
    </NavigationContainer>
  )
}