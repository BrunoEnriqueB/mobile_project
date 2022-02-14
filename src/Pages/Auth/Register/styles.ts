import styled from 'styled-components/native';
import { COLORS } from '../../../theme';

export const Container = styled.View`
  flex: 1;
  background-color: ${COLORS.white_dark};
  flex-direction: column;
`;

export const InputContainer = styled.View`
  margin-bottom: 60px;
`;

export const InválidEmailText = styled.View`
  align-self: flex-end;
  justify-self: flex-start;
  height: 15px;
  position: absolute;
  top: 115px;
`;
export const TextLogin = styled.Text`
  font-style: normal;
  font-family: 'Roboto-Black';
  color: ${COLORS.black};
  opacity: .7;
  font-size: 24px;
  margin: 80px auto 50px;
`;
export const Register = styled.TouchableOpacity`
  margin: 0 auto;
  background: #51CCCA;
  border-radius: 70px;
  align-items: center;
  justify-content: center;
`;

