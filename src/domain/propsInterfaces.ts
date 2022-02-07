export interface AuthProviderProps {
  children: React.ReactNode;
}

export interface AuthInputProps {
  text: string;
  icon: string;
  maxLenght?: number;
  securityTextEntry?: boolean;
  textContentType?: 'name' | 'emailAddress' | 'password' | 'telephoneNumber';
  autoCompleteType?: 'name' | 'password' | 'email' | 'tel';
  value: string,
  onChangeText: React.Dispatch<React.SetStateAction<string>>
}

export interface AuthLabelProps {
  title: 'Login' | 'Register';
  onPress: () => void;
}

export interface Props {
  title: string;
  onPress: () => void;
  borderRadius: number;
  fontSize: number;
  paddingHorizontal: number;
}

export interface ClickHereProps {
  title: 'Login' | 'Register';
  onPress: () => void;
}
