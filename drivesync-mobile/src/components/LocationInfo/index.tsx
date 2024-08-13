import React from 'react';
import { Container, Info, Label, Description } from './styles';
import { IconBox, IconBoxProps } from '../IconBox';

export type LocationInfoProps = {
    label: string;
    description: string;
}

type Props = LocationInfoProps & {
    icon: IconBoxProps;
};

export function LocationInfo({ label, icon, description}: Props) {
  return (
    <Container>
        <IconBox icon={icon} />

        <Info>
            <Label numberOfLines={1}>
                {label}
            </Label>

            <Description umberOfLines={1}>
                {description}
            </Description>
        </Info>
    </Container>
  );
}