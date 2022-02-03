import styled from 'styled-components/native';

export const Btn = styled.TouchableOpacity`
  font-size: ${props => props.theme.fontSizeButton};
  font-family: ${props => props.theme.fontFamilyButton};
  padding: ${props => props.theme.paddintButton};
  color: ${props => props.theme.colorButton};
`;

export const TextBtn = styled.Text`

`;