import styled from "styled-components/native";

export const Container = styled.View`
  flex: 1;
  background-color: #263238; /* Substitua pelo valor hexadecimal correspondente ao GRAY_800 */
`;

export const Content = styled.View`
  flex-grow: 1;
  padding: 32px;
`;

export const Label = styled.Text`
  color: #B0BEC5; /* Substitua pelo valor hexadecimal correspondente ao GRAY_300 */
  font-size: 14px; /* Substitua pelo tamanho da fonte SM em pixels */
  font-family: 'Roboto-Regular'; /* Substitua pela família de fonte desejada */
  margin-top: 32px;
  margin-bottom: 5px;
`;

export const LicensePlate = styled.Text`
  color: #E0E0E0; /* Substitua pelo valor hexadecimal correspondente ao GRAY_100 */
  font-size: 24px; /* Substitua pelo tamanho da fonte XXXL em pixels */
  font-family: 'Roboto-Bold'; /* Substitua pela família de fonte desejada */
`;

export const Description = styled.Text`
  color: #E0E0E0; /* Substitua pelo valor hexadecimal correspondente ao GRAY_100 */
  font-size: 18px; /* Substitua pelo tamanho da fonte MD em pixels */
  font-family: 'Roboto-Regular'; /* Substitua pela família de fonte desejada */
  text-align: justify;
`;

export const Footer = styled.View`
  width: 100%;
  flex-direction: row;
  gap: 16px;
  margin-top: 32px;
  padding: 32px;
`;

export const AsyncMessage = styled.Text`
  color: #B0BEC5; /* Substitua pelo valor hexadecimal correspondente ao GRAY_300 */
  font-size: 14px; /* Substitua pelo tamanho da fonte SM em pixels */
  font-family: 'Roboto-Regular'; /* Substitua pela família de fonte desejada */
  text-align: center;
  flex: 1;
  margin: 32px;
`;
