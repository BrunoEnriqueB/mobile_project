import styled from 'styled-components/native';
import { COLORS } from '../../../theme';

export const Container = styled.View`
  flex: 1;
  background-color: ${COLORS.white_light};
  flex-direction: column;
`;

export const TextLogin = styled.Text`
  font-style: normal;
  font-family: 'Roboto-Black';
  color: ${COLORS.black};
  opacity: .7;
  font-size: 24px;
  margin: 80px auto 50px;
`;
export const LoginButton = styled.TouchableOpacity`
  margin: 0 auto;
  background: #51CCCA;
  border-radius: 70px;
  align-items: center;
  justify-content: center;
`;

