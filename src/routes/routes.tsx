import React from 'react';

import { AppRoutes } from './auth.routes';
import { AuthRoutes } from './app.routes';
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