import styled from "styled-components/native";
import { COLORS, Fonts } from "../../../../theme";

export const Container = styled.View`
  height: 350px;
  background-color: ${COLORS.white_dark};
  align-items: center;
`;

export const Content = styled.View`
  margin-top: 28px;
`;

export const Title = styled.Text`
  font-size: 28px;
  color: ${COLORS.black};
  font-family: ${Fonts.robotoR};
  font-weight: bold;
  text-align: center;
`;

export const InválidEmailText = styled.View`
  align-self: flex-end;
  justify-self: flex-start;
  height: 15px;
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