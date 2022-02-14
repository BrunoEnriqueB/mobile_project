import React, { useEffect, useRef, useState } from 'react';
import { useAuth } from '../../hooks/useAuth';

import { Container, PinInput } from './styles'

type CodeProps = {
  setCode: (code: string) => void
}

export function Code({ setCode }: CodeProps) {
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
  const { email } = useAuth();

  function handleSubmitCode() {
    setCode(code);
    if (email) {
      setPin1('');
      setPin2('');
      setPin3('');
      setPin4('');
      setPin5('');
      pin1Ref.current.focus();
    }
  }

  useEffect(() => {
    setStringCode(pin1 + pin2 + pin3 + pin4 + pin5);
    if (code.length === 5) {
      handleSubmitCode();
    }
  }, [pin1, pin2, pin3, pin4, pin5, code]);

  return (
    <Container >
      <PinInput
        autoFocus
        ref={pin1Ref}
        keyboardType={'numeric'}
        maxLength={1}
        value={pin1}
        onKeyPress={({ nativeEvent }) => {
          if (pin1 === '') {
            if (nativeEvent.key !== 'Backspace') {
              setPin1(nativeEvent.key);
              pin2Ref.current.focus();
            }
          } else {
            if (nativeEvent.key === 'Backspace') {
              setPin1('');
            } else {
              setPin2(nativeEvent.key);
              pin2Ref.current.focus();
            }
          }
        }}
      />
      < PinInput
        ref={pin2Ref}
        keyboardType={'numeric'}
        maxLength={1}
        value={pin2}
        onKeyPress={({ nativeEvent }) => {
          if (pin2 === '') {
            if (nativeEvent.key === 'Backspace') {
              pin1Ref.current.focus();
            } else {
              setPin2(nativeEvent.key);
              pin3Ref.current.focus();
            }
          } else {
            if (nativeEvent.key === 'Backspace') {
              setPin2('');
            } else {
              setPin3(nativeEvent.key);
              pin3Ref.current.focus();
            }
          }
        }}
      />
      <PinInput
        ref={pin3Ref}
        keyboardType={'numeric'}
        maxLength={1}
        value={pin3}
        onKeyPress={({ nativeEvent }) => {
          if (pin3 === '') {
            if (nativeEvent.key === 'Backspace') {
              pin2Ref.current.focus();
            } else {
              setPin3(nativeEvent.key);
              pin4Ref.current.focus();
            }
          } else {
            if (nativeEvent.key === 'Backspace') {
              setPin3('');
            } else {
              setPin4(nativeEvent.key);
              pin4Ref.current.focus();
            }
          }
        }}
      />
      <PinInput
        ref={pin4Ref}
        keyboardType={'numeric'}
        maxLength={1}
        value={pin4}
        onKeyPress={({ nativeEvent }) => {
          if (pin4 === '') {
            if (nativeEvent.key === 'Backspace') {
              pin3Ref.current.focus();
            } else {
              setPin4(nativeEvent.key);
              pin5Ref.current.focus();
            }
          } else {
            if (nativeEvent.key === 'Backspace') {
              setPin4('');
            } else {
              setPin5(nativeEvent.key);
              pin5Ref.current.focus();
            }
          }
        }}
      />
      <PinInput
        ref={pin5Ref}
        keyboardType={'numeric'}
        maxLength={1}
        value={pin5}
        onKeyPress={({ nativeEvent }) => {
          if (pin5 === '') {
            if (nativeEvent.key === 'Backspace') {
              pin4Ref.current.focus();
            } else {
              setPin5(nativeEvent.key);
            }
          } else {
            if (nativeEvent.key === 'Backspace') {
              setPin5('');
            }
          }
        }}
      />
    </Container>
  )
}