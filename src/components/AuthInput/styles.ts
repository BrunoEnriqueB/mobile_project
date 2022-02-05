import styled from "styled-components/native";
import { COLORS, Fonts } from "../../theme";

export const InputContainer = styled.View`
  flex-direction: row;
  width: 83%;
  margin: 0 auto 10px;
  align-items: center;
  border-bottom-color:${COLORS.grey_light};
  border-bottom-width: 1px;
`;

export const InputText = styled.TextInput`
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
  right: 10px;
`;

