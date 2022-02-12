import styled from "styled-components/native";
import { COLORS } from "../../theme";

export const Container = styled.View`
  flex-direction: row;
`;

export const PinInput = styled.TextInput`
  border: 1px solid ${COLORS.grey_light};
  border-radius: 15px
  background-color: ${COLORS.white_light}
  font-size: 40px;
  width: 60px;
  color: ${COLORS.black}
  text-align: center
  margin: 0 8px;
  box-shadow: 10px 5px 5px #f0f;
`;