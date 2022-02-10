import styled from "styled-components/native";
import { COLORS, Fonts } from "../../../../theme";

export const Container = styled.View`
  height: 100%;
  background-color: ${COLORS.white_light};
  align-items: center;
`;

export const Content = styled.View`
  height: 250px;
  width: 350px;
  border: 1px solid  #8E8E8E;
  margin-top: 35%;
`;

export const SendEmailButton = styled.TouchableOpacity`
  width: 150px;
  height: 50px;
  position: absolute;
  bottom: 20px;
  right: 30px;
  border-radius: 7px;
  background-color: ${COLORS.blue_dark};
  justify-content: center;
  align-items: center;
  
`;

export const SendEmailText = styled.Text`
  font-size: 24px;
  font-family: ${Fonts.robotoR};
  font-weight: bold;
  color: ${COLORS.white_light};
  margin: 10px 35px;
`;