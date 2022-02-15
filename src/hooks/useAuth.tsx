import AsyncStorage, { useAsyncStorage } from '@react-native-async-storage/async-storage';
import React, { createContext, useContext, useState } from 'react';
import { useEffect } from 'react';
import { api } from '../config/api';
import { AuthData, LoginData, RegisterData, ResponseObject } from '../domain/authTypes';
import { AuthProviderProps } from '../domain/propsInterfaces';
import { SendEmail } from '../pages/Auth/ForgotPassword/SendEmail';

import { login, newPassword, register, sendMail, validateCode } from '../services/authService';

export const AuthContext = createContext({} as AuthData);


function AuthProvider({ children }: AuthProviderProps) {
  const [token, setToken] = useState('');
  const [authorized, setAuthorized] = useState(false);
  const [userEmail, setUserEmail] = useState('');



  async function signIn(data: LoginData) {
    const auth = await login(data);
    if (auth) {
      await authUser(auth);
    }
  }

  async function signUp(data: RegisterData) {
    const auth = await register(data);
    if (auth) {
      await authUser(auth);
    }
  }

  async function authUser(userToken: string) {
    setToken(userToken);
    setAuthorized(true);

    await AsyncStorage.setItem('@token', JSON.stringify(token));
  }

  async function checkToken(): Promise<void> {
    const storageToken = await AsyncStorage.getItem('@token');
    if (storageToken) {
      await authUser(JSON.stringify(token));
    } else {
      setToken('')
    }
    // await AsyncStorage.removeItem('@token');
  }

  async function sendEmail(email: string): Promise<boolean> {
    const emailUser: string | undefined = await sendMail(email);

    if (emailUser) {
      setUserEmail(emailUser);
      return true;
    }
    return false;
  }

  async function verifyCode(email: string, code: string) {
    const codeValidate: string | undefined = await validateCode(email, code);
    if (codeValidate) {
      await AsyncStorage.setItem('@resetPasswordToken', codeValidate);
      api.defaults.headers.common['authorization'] = `Bearer ${codeValidate}`
      return true;
    }
    return false;
  }

  async function sendNewPassword(password: string, confirmpassword: string) {
    const passwordToken = await AsyncStorage.getItem('@resetPasswordToken');
    const message = await newPassword(password, confirmpassword, passwordToken!);
    await AsyncStorage.removeItem('@resetPasswordToken');
    setUserEmail('');
    return message;
  }

  async function logout() {
    await AsyncStorage.removeItem('@token');
    setAuthorized(false);
    return;
  }

  useEffect(() => {
    checkToken().then(() => { }).catch(() => { });

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [userEmail])

  return (
    <AuthContext.Provider value={{ token, signIn, signUp, authorized, logout, sendEmail, email: userEmail, verifyCode, sendNewPassword }}>
      {children}
    </ AuthContext.Provider>
  )
}

function useAuth() {
  const context = useContext(AuthContext);

  return context;
}

export {
  AuthProvider,
  useAuth
}