import React from "react";
import { View, Text } from "react-native";
import { Ionicons } from '@expo/vector-icons';
import { TouchableOpacity } from "react-native-gesture-handler";
import { useNavigation } from '@react-navigation/native';
import styles from './styles';
import { StackNavigationProp } from '../../@type/navigation';

type NavigationProp = StackNavigationProp<RootStackParamList, 'DetalhesViagem'>;

interface ViagemCardProps {
  viagem: {
    id: number;
    origem: string;
    destino: string;
    dataInicio: string;
    status: string;
    veiculo: string;
  } | null;
}

export default function CardViagemStatus({ viagem }: ViagemCardProps) {
  const navigation = useNavigation<NavigationProp>();

  const handleCardPress = () => {
    navigation.navigate('DetalhesViagem', { viagem });
  };

  return (
    <TouchableOpacity onPress={handleCardPress}>
      <View style={styles.container}>
        <View style={styles.card}>
          <View style={styles.iconSquare}>
            <Ionicons style={styles.icon} name="bus-outline" size={35} color="white" />
          </View>

          <View style={styles.content}>
            <View style={styles.row}>
              <Text style={styles.valueTitle}>{viagem.origem}</Text>
              <Text style={styles.valueTitle}>{viagem.destino}</Text>
            </View>
            <View style={styles.row}>
              <Text style={styles.valueSubtitle}>Veículo: {viagem.veiculo}</Text>
            </View>
            <View style={styles.row}>
              <Text style={styles.valueSubtitle}>{new Date(viagem.dataInicio).toLocaleString()}</Text>
            </View>
            <View style={styles.valueStatusBadge}>
              <Text style={styles.valueStatus}>{viagem.status}</Text>
            </View>
          </View>

          <View style={styles.iconChevron}>
            <Ionicons name="chevron-forward-outline" size={30} color="#8D8D99" />
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );
}
