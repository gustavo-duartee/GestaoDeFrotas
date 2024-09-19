import styled from "styled-components/native";

export const Container = styled.TouchableOpacity`
  width: 100%;
  margin: 32px 0;
  padding: 22px;
  border-radius: 6px;
  background-color: #37474F; /* Substitua pelo valor hexadecimal correspondente ao GRAY_700 */
  flex-direction: row;
  align-items: center;
`;

export const IconBox = styled.View`
  width: 77px;
  height: 77px;
  border-radius: 6px;
  background-color: #607D8B; /* Substitua pelo valor hexadecimal correspondente ao GRAY_600 */
  margin-right: 12px;
  justify-content: center;
  align-items: center;
`;

export const Message = styled.Text`
  color: #E0E0E0; /* Substitua pelo valor hexadecimal correspondente ao GRAY_100 */
  font-size: 14px; /* Substitua pelo tamanho da fonte SM em pixels */
  font-family: 'Roboto-Regular'; /* Substitua pela família de fonte desejada */
  flex: 1;
  text-align: justify;
  text-align-vertical: center;
`;

export const TextHighlight = styled.Text`
  color: #64B5F6; /* Substitua pelo valor hexadecimal correspondente ao BRAND_LIGHT */
  font-size: 14px; /* Substitua pelo tamanho da fonte SM em pixels */
  font-family: 'Roboto-Bold'; /* Substitua pela família de fonte desejada */
`;
