import { AxiosError, AxiosResponse } from 'axios';
import { Alert } from 'react-native';
import { api } from '../config/api';
import { AuthData, RegisterData, LoginData } from '../hooks/useAuth';

export type ResponseObject = {
  message: string,
  token?: string

}
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

export async function login(data: LoginData): Promise<string | undefined | void> {
  try {
    return await api.post('/user/login', data).then((res: AxiosResponse<ResponseObject>) => {
      return res.data.token;
    }).catch((err: AxiosError<ResponseObject>) => {
      if (err.response?.data.message) {
        Alert.alert(err.response?.data.message);
      }
      return;
    })
  } catch (error) {

    console.log(error);
  }
}