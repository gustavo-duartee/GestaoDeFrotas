import React from 'react';
import { Container, Info, Label, Description } from './styles';

export type LocationInfoProps = {
    label: string;
    description: string;
}

type Props = LocationInfoProps;

export function LocationInfo({ label, description}: Props) {
  return (
    <Container>
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