import React, { useEffect, useRef, useState } from 'react';

import { Container, PinInput } from './styles'

export function Code({ setCode }: { setCode: (code: string) => void }) {
  const pin1Ref = useRef(null);
  const pin2Ref = useRef(null);
  const pin3Ref = useRef(null);
  const pin4Ref = useRef(null);
  const pin5Ref = useRef(null);

  const [pin1, setPin1] = useState('');
  const [pin2, setPin2] = useState('');
  const [pin3, setPin3] = useState('');
  const [pin4, setPin4] = useState('');
  const [pin5, setPin5] = useState('');

  const [code, setStringCode] = useState('');

  function handleSubmitCode() {
    setCode(code);
  }

  useEffect(() => {
    if (code.length === 5) {
      handleSubmitCode();
    }
  });

  return (
    <Container >
      <PinInput
        ref={pin1Ref}
        keyboardType={'numeric'}
        maxLength={1}
        onChangeText={(pin: string) => {
          setPin1(pin);
          if (pin !== '') {
            pin2Ref.current.focus();
          }
        }}
        value={pin1}
      />
      <PinInput
        ref={pin2Ref}
        keyboardType={'numeric'}
        maxLength={1}
        onChangeText={(pin: string) => {
          setPin2(pin);
          if (pin !== '') {
            pin3Ref.current.focus();
          } else {
            pin1Ref.current.focus();
          }
        }}
        value={pin2}
      />
      <PinInput
        ref={pin3Ref}
        keyboardType={'numeric'}
        maxLength={1}
        onChangeText={(pin: string) => {
          setPin3(pin);
          if (pin !== '') {
            pin4Ref.current.focus();
          } else {
            pin2Ref.current.focus();
          }
        }}
        value={pin3}
      />
      <PinInput
        ref={pin4Ref}
        keyboardType={'numeric'}
        maxLength={1}
        onChangeText={(pin: string) => {
          setPin4(pin);
          if (pin !== '') {
            pin5Ref.current.focus();
          } else {
            pin3Ref.current.focus();
          }
        }}
        value={pin4}
      />
      <PinInput
        ref={pin5Ref}
        keyboardType={'numeric'}
        maxLength={1}
        onChangeText={(pin: string) => {
          setPin5(pin);
          if (pin !== '') {
            setStringCode(pin1 + pin2 + pin3 + pin4 + pin);
          } else {
            pin4Ref.current.focus();
          }
        }}
        value={pin5}
      />
    </Container>
  )
}