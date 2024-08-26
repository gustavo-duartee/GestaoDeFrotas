import styled from 'styled-components/native';

export const Container = styled.View`
  width: 100%;
  flex-direction: row;
  align-items: center;
`;

export const Info = styled.View`
    flex: 1;
`;

export const Label = styled.Text`
    color: #8D8D99; /* Removidas as aspas ao redor da cor */
    font-size: 14px;
    font-family: 'Roboto_400Regular';
`;

export const Description = styled.Text`
    color: #E1E1E6; /* Removidas as aspas ao redor da cor */
    font-size: 14px;
    font-family: 'Roboto_400Regular';
`;
