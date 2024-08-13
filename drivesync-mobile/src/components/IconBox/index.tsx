import React from 'react';
import { Container, SizeProps } from './styles';

import { IconProps } from 'phosphor-react-native';
import { useTheme } from 'styled-components';

export type IconBoxProps = (props: IconProps) => JSX.Element;

type Props = {
    size?: SizeProps;
    icon: IconBoxProps
}

export function IconBox({ size = 'NORMAL', icon: Icon}: Props) {
    const { COLORS } = useTheme();

    const iconSize = size === 'NORMAL' ? 24 : 16;

  return (
    <Container size={size}>
        <Icon 
            size={iconSize}
            color={COLORS_BRAND_LIGHT}
        />
    </Container>
  );
}