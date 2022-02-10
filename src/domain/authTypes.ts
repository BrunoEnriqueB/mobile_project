export interface AuthData {
  token?: string | object;
  authorized: boolean;
  signIn: (data: LoginData) => void
  signUp: (data: RegisterData) => void
  // sendEmail: (email: string) => Promise<string | undefined>
  logout: () => void
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

export interface ResponseObject {
  message: string,
  token?: string
}

export type AuthParams = {
  Login: undefined,
  Register: undefined,
  SendEmail: undefined,
  RequestCode: undefined,
  NewPassword: undefined
}
