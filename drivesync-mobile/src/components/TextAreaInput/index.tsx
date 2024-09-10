import { TextInput, TextInputProps } from "react-native";
import { Container, Input, Label } from "./styles";
import { useTheme } from "styled-components/native";
import { forwardRef } from "react";

type Props = TextInputProps & {
  label: string;
};

const TextAreaInput = forwardRef<TextInput, Props>(
  ({ label, ...rest }, ref) => {
    const theme = useTheme();

    return (
      <Container>
        <Label>{label}</Label>
        <Input
          ref={ref}
          placeholderTextColor={theme.COLORS.GRAY_400}
          multiline
          autoCapitalize="setences"
          {...rest}
        />
      </Container>
    );
  }
);

export { TextAreaInput };
