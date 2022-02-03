import styled from 'styled-components/native';
import { Fonts } from '../../theme';

export const AuthLabelContainer = styled.View`
  flex: 1;
  flex-direction: row;
  justify-content: center;
  align-items: flex-end;
`;

export const LabelText = styled.Text`
  font-size: 24px;
  font-family: ${Fonts.dongleR};
  color: #000;
  opacity: .4;
  margin-right: 2px;
`;