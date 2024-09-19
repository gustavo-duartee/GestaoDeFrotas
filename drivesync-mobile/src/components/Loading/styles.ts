import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
  background-color: #263238; /* Substitua pelo valor hexadecimal correspondente ao GRAY_800 */
`;

export const LoadIndicator = styled.ActivityIndicator.attrs(() => ({
  color: '#64B5F6', /* Substitua pelo valor hexadecimal correspondente ao BRAND_LIGHT */
}))``;
