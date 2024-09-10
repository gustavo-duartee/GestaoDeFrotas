import styled from "styled-components/native";
import theme from "../../theme";

export const Container = styled.View`
  flex: 1;
  background-color: ${theme.COLORS.GRAY_800};
`;

export const Content = styled.View`
  flex: 1;
  gap: 16px;
  padding: 32px;
  margin-top: 16px;
`;

export const Message = styled.Text`
  color: ${theme.COLORS.WHITE};
  font-family: ${theme.FONT_FAMILY.REGULAR};
  textalign: center;
  margin-bottom: 44px;
`;

export const MessageContent = styled.View`
  flex: 1;
  justify-content: center;
  padding: 24px;
`;
