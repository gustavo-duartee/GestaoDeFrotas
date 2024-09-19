import { Dimensions } from "react-native";
import styled from "styled-components/native";

const dimensions = Dimensions.get("window");

export const Container = styled.View`
  width: ${dimensions.width}px;
  position: absolute;
  z-index: 1;
  background-color: #9E9E9E; /* Substitua pelo valor hexadecimal correspondente ao GRAY_500 */
  padding-bottom: 5px;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;

export const Title = styled.Text`
  color: #E0E0E0; /* Substitua pelo valor hexadecimal correspondente ao GRAY_100 */
  font-size: 14px; /* Substitua pelo tamanho da fonte SM em pixels */
  font-family: 'Roboto-Regular'; /* Substitua pela família de fonte desejada */
  margin-left: 4px;
`;
