import AsyncStorage from '@react-native-async-storage/async-storage';
import React, { createContext, useContext, useState } from 'react';
import { useEffect } from 'react';

import { Login } from '../pages/Auth/Login';
import { Register } from '../pages/Auth/Register';

import { login, register, ResponseObject } from '../services/authService';

export interface AuthData {
  token?: string | object;
  authorized: boolean;
  signIn: (data: LoginData) => void
  signUp: (data: RegisterData) => void
}

export interface LoginData {
  email: string,
  password: string,
}

export interface RegisterData extends LoginData {
  name: string,
  phone: string,
  password: string,
  confirmpassword: string
}

type AuthProviderProps = {
  children: React.ReactNode;
}

export const AuthContext = createContext({} as AuthData);


function AuthProvider({ children }: AuthProviderProps) {
  const [token, setToken] = useState('');
  const [authorized, setAuthorized] = useState(false);

  async function signIn(data: LoginData) {
    const auth: string | undefined | void = await login(data);
    if (auth) {
      setToken(auth);
      await authUser();
    }
  }

  async function signUp(data: RegisterData) {
    const auth: string | undefined | void = await register(data);
    if (auth) {
      setToken(auth);
      await authUser();
    }
  }

  async function authUser() {
    setAuthorized(true);

    await AsyncStorage.setItem('@token', JSON.stringify(token));
  }


  return (
    <AuthContext.Provider value={{ token, signIn, signUp, authorized }}>
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