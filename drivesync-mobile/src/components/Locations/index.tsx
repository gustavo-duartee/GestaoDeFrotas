import { Bus, FlagCheckered } from 'phosphor-react-native';

import { LocationInfo, LocationInfoProps } from '../LocationInfo';
import { Container, Line } from './styles';

type Props = {
    partida: LocationInfoProps;
    chegada?: LocationInfoProps | null;
}

export function Locations({ partida, chegada = null }: Props) {
    return (
        <Container>
            <LocationInfo
                icon={Bus}
                label={partida.label}
                description={partida.description}
            />

            {
                chegada && 
                <>
                    <Line />

                    <LocationInfo
                        icon={FlagCheckered}
                        label={chegada.label}
                        description={chegada.description}
                    />
                </>
            }
        </Container>
    )
}