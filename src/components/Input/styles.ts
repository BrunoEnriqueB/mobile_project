import styled from 'styled-components/native';
import { COLORS, Fonts } from '../../theme';

export const Container = styled.View`
  width: 100%;
  align-items: center;
`;

export const Title = styled.Text`
  color: ${COLORS.black};
  opacity: 0.7;
  margin-bottom: 15px;
  align-self: flex-start;
  margin-left: 30px;
`;

export const InputContainer = styled.View`
  width: 93%;
  background-color: ${COLORS.white_light};
  border-radius: 20px;
`;

export const InputBox = styled.TextInput`
  display: flex;
  width: 80%;
  font-family: ${Fonts.robotoR};
  font-size: 18px;
  margin-left: 10px;
  color: ${COLORS.black};
  opacity: .6;
`;

export const SeePassword = styled.TouchableOpacity`
  position: absolute;
  right: 10px
  top: 10px;
`;
