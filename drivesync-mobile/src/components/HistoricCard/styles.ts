import styled from "styled-components/native";

export const Container = styled.TouchableOpacity`
  width: 100%;
  background-color: #37474F; /* Substitua pelo valor hexadecimal correspondente ao GRAY_700 */
  padding: 20px 16px;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  border-radius: 6px;
  margin-bottom: 12px;
`;

export const Info = styled.View`
  flex: 1;
`;

export const LicensePlate = styled.Text`
  color: #FFFFFF; /* Cor branca fixa */
  font-size: 18px; /* Substitua pelo tamanho da fonte MD em pixels */
  font-family: 'Roboto-Bold'; /* Substitua pela família de fonte desejada */
`;

export const Departure = styled.Text`
  color: #B0BEC5; /* Substitua pelo valor hexadecimal correspondente ao GRAY_200 */
  font-size: 12px; /* Substitua pelo tamanho da fonte XS em pixels */
  font-family: 'Roboto-Regular'; /* Substitua pela família de fonte desejada */
  margin-top: 4px;
`;
