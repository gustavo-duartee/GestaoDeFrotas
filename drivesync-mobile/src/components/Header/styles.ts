import styled from "styled-components/native";
import theme from "../../theme";

export const Container = styled.View`
  width: 100%;
  padding: 0 32px 24px;
  flex-direction: row;
  justify-content: space-between;

  background-color: ${theme.COLORS.GRAY_700};
`;

export const Title = styled.Text`
  color: ${theme.COLORS.GRAY_100};
  font-size: ${theme.FONT_SIZE.XL}px;
  font-family: ${theme.FONT_FAMILY.BOLD};
`;
