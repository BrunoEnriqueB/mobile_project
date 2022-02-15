export interface AuthData {
  token?: string | object;
  authorized: boolean;
  email: string;
  signIn: (data: LoginData) => void;
  signUp: (data: RegisterData) => void;
  sendEmail: (email: string) => Promise<boolean>;
  verifyCode: (email: string, code: string) => Promise<boolean>;
  logout: () => void;
  sendNewPassword: (password: string, confirmpassword: string) => Promise<string | undefined>;
}

export interface LoginData {
  email: string;
  password: string;
}

export interface RegisterData extends LoginData {
  name: string;
  phone: string;
  password: string;
  confirmpassword: string
}

export interface ResponseObject {
  message: string;
  token?: string;
  email?: string;
}

export type AuthParams = {
  Login: undefined;
  Register: undefined;
  SendEmail: undefined;

}
