import styled from 'styled-components/native';
import { COLORS, Fonts } from '../../theme';

export const Title = styled.Text`
  color: ${COLORS.black};
  opacity: 0.7;
  margin-bottom: 15px;
`;

export const InputBox = styled.TextInput`
  width: 340px;
  height: 50px;
  background-color: ${COLORS.white_light};
  align-self: center;
  border-radius: 12px;
  padding: 12px;
  color: ${COLORS.black}
  font-size: 18px;
  margin-bottom: -25px;
  font-family: ${Fonts.robotoR}
`;
