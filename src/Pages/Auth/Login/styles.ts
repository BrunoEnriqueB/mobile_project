import styled from 'styled-components/native';
import { COLORS } from '../../../theme';

export const Container = styled.View`
  flex: 1;
  background-color: ${COLORS.white_dark};
  flex-direction: column;
`;

export const Logo = styled.Text`
  font-style: normal;
  font-family: 'Roboto-italic';
  font-size: 32px;
  line-height: 28px;
  margin: 15px auto 0px;
`;
export const TextLogin = styled.Text`
  font-style: normal;
  font-family: 'Roboto-Black';
  color: ${COLORS.black};
  opacity: .7;
  font-size: 24px;
  margin: 150px auto 0px;
`;
export const ForgotPassword = styled.TouchableOpacity`
  align-items: flex-end;
`;
export const ForgotPasswordText = styled.Text`
  color: ${COLORS.black};
  opacity: .68;
  margin-right: 50px;
  margin-top: 10px;
  margin-bottom: 60px;
`;
export const LoginButton = styled.TouchableOpacity`
  margin: 0 auto;
  background: #51CCCA;
  border-radius: 70px;
  align-items: center;
  justify-content: center;
`;

