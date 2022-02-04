import { NativeModules } from "react-native";
import styled from "styled-components/native";
import { COLORS, Fonts } from "../../theme";

export const ContainerButton = styled.TouchableOpacity`
  margin: 10px auto 0px;
  background: ${COLORS.blue_dark};
`;

export const TextLabel = styled.Text`
  font-family: ${Fonts.dongleR};
  color: #fff;
  align-items: center;
  justify-content: center;
  margin-top: auto;
  margin-bottom: auto;
  position: relative;
`;