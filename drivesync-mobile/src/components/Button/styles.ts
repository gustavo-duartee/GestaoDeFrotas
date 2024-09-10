import styled from "styled-components/native";
import theme from "../../theme";

export const Container = styled.TouchableOpacity`
  flex: 1;
  min-height: 56px;
  max-height: 56px;
  border-radius: 6px;

  align-items: center;
  justify-content: center;

  background-color: ${theme.COLORS.BRAND_MID};
`;

export const Title = styled.Text`
  color: ${theme.COLORS.WHITE};
  font-size: ${theme.FONT_SIZE.MD}px;
  font-family: ${theme.FONT_FAMILY.BOLD};
`;

export const Loading = styled.ActivityIndicator.attrs(() => ({
  color: theme.COLORS.WHITE,
}))``;
