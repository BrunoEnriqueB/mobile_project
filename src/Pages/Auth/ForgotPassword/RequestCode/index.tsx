import React from 'react';

import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { View, Text } from 'react-native';
import { AuthParams } from '../../../../domain/authTypes';

type Props = NativeStackScreenProps<AuthParams, 'NewPassword'>

export function RequestCode({ navigation }: Props) {
  return (
    <View>
      <Text>
        Request code!
      </Text>
    </View>
  )
}