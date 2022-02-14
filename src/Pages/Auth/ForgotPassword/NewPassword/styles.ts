import styled from "styled-components/native";
import { COLORS, Fonts } from "../../../../theme";

export const Container = styled.View`
  background-color: ${COLORS.white_dark};
  height: 470px;
  width: 100%;
  align-items: center;
`;

export const InputContainer = styled.View`
  width: 100%;
  margin-bottom: 20px;
`;

export const Title = styled.Text`
  margin-top: 28px;
  font-size: 28px;
  color: ${COLORS.black};
  font-family: ${Fonts.robotoR};
  font-weight: bold;
  text-align: center;
`;

export const Paragraph = styled.Text`
  margin-top: 20px;
  margin-bottom: 20px;
  margin-right: 10px;
  margin-left: 10px;
  text-align: justify;
  font-size: 16px;
  color: ${COLORS.black};
  font-family: ${Fonts.robotoR};
`;