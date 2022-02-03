import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  background-color: ${props => props.theme.bg};
  flex-direction: column;
`;

export const Logo = styled.Text`
  font-style: normal;
  font-family: 'Roboto-italic';
  font-size: 32px;
  line-height: 28px;
  margin: 15px auto 0px;
`;
export const TextLogin = styled.Text`
  font-style: normal;
  font-family: 'Roboto-Black';
  color: #000;
  font-size: 24px;
  margin: 150px auto 0px;
`;
export const LoginButton = styled.TouchableOpacity`
  margin: 0 auto;
  background: #51CCCA;
  border-radius: 70px;
  align-items: center;
  justify-content: center;
`;

