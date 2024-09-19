import styled from "styled-components/native";

export const Container = styled.TouchableOpacity`
  flex: 1;
  min-height: 56px;
  max-height: 56px;
  border-radius: 6px;
  align-items: center;
  justify-content: center;
  background-color: #4CAF50;
`;

export const Title = styled.Text`
  color: #FFFFFF; /* Cor branca fixa */
  font-size: 16px; /* Substitua pelo tamanho da fonte MD em pixels */
  font-family: 'Roboto-Bold'; /* Substitua pela família de fonte desejada */
`;

export const Loading = styled.ActivityIndicator.attrs(() => ({
  color: '#FFFFFF', /* Cor branca fixa */
}))``;
