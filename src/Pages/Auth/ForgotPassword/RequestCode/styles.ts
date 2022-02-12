import styled from 'styled-components/native';
import { COLORS, Fonts } from '../../../../theme';

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
