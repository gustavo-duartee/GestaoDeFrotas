import React from 'react';
import { Container, SizeProps } from './styles';
import { IconProps } from 'phosphor-react-native';

export type IconBoxProps = (props: IconProps) => JSX.Element;

type Props = {
    size?: SizeProps;
    icon: IconBoxProps;
}

export function IconBox({ size = 'NORMAL', icon: Icon }: Props) {
    const iconSize = size === 'NORMAL' ? 24 : 16;

    return (
        <Container size={size}>
            <Icon 
                size={iconSize}
                color='#FFFFFF'
            />
        </Container>
    );
}
