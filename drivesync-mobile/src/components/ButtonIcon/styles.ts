import styled from "styled-components/native";
import theme from "../../theme";

export const Container = styled.TouchableOpacity`
  height: 56px;
  width: 56px;
  border-radius: 6px;

  align-items: center;
  justify-content: center;

  background-color: ${theme.COLORS.GRAY_600};
`;
