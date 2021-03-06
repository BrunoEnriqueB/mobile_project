import { NativeModules } from "react-native";
import styled from "styled-components/native";
import { COLORS, Fonts } from "../../theme";

export const ContainerButton = styled.TouchableOpacity`
  margin: 0 auto;
  background: ${COLORS.blue_dark};
`;

export const TextLabel = styled.Text`
  font-family: ${Fonts.dongleR};
  color: ${COLORS.white_light};
  align-items: center;
  justify-content: center;
  margin-top: auto;
  margin-bottom: auto;
  position: relative;
`;