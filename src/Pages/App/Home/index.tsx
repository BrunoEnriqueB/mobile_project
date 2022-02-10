import React from 'react';
import { Button, Text, View } from 'react-native';
import { useAuth } from '../../../hooks/useAuth';


export function Home() {
  const { logout } = useAuth();
  return (
    <View style={{ backgroundColor: '#f2f2f2', flex: 1 }}>
      <Text>
        Home!
      </Text>
      <Button title='Logout' onPress={logout} />
    </View>
  )
}