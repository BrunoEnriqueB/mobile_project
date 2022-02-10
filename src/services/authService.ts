import { AxiosError, AxiosResponse } from 'axios';
import { Alert } from 'react-native';
import { api } from '../config/api';
import { LoginData, RegisterData, ResponseObject } from '../domain/authTypes';


export async function register(data: RegisterData): Promise<string | undefined | void> {
  return await api.post('/user/register', data).then((res: AxiosResponse<ResponseObject>) => {
    return res.data.token;
  }).catch((err: AxiosError<ResponseObject>) => {
    if (err.response?.data.message) {
      Alert.alert(err.response?.data.message);
    }
    return;
  })
}

export async function login(data: LoginData): Promise<string | undefined> {
  try {
    return await api.post('/user/login', data).then((res: AxiosResponse<ResponseObject>) => {
      return res.data.token;
    }).catch((err: AxiosError<ResponseObject>) => {
      if (err.response?.data.message) {
        Alert.alert(err.response?.data.message);
      }
      return undefined;
    })
  } catch (error) {

    console.log(error);
  }
}

export async function sendMail(email: string): Promise<string | undefined> {
  return await api.post('/user/forgotpassword', {
    email: email
  }).then(() => {
    return undefined;
  }).catch((err: AxiosError<ResponseObject>) => {
    if (err.response?.data.message) {
      Alert.alert(err.response.data.message)
    }
    return err.response?.data.message
  })
}