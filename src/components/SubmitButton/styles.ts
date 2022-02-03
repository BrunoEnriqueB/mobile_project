import styled from "styled-components/native";
import { COLORS } from "../../theme";

export const ContainerButton = styled.TouchableOpacity`
  margin: 0 auto;
  background: ${props => props.theme.colorButton};
  border-radius: 70px;
  align-items: center;
  justify-content: center;
`;

export const TextLabel = styled.Text`
  font-size: 62px;
  font-family: 'Dongle-Regular';
  padding: 0px 100px;
  color: #fff;

`;