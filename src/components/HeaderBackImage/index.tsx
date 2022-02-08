import React from 'react';
import { Image } from 'react-native';


export function HeaderBackImage() {
  return (
    <Image source={{ uri: '../../assets/img/left-arrow.png' }} style={{ width: 50, height: 50, tintColor: '#000' }}
    />
  )
}