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
    motorista: string;
    veiculo: string;
    dataInicio: string;
    status: string;
  };
}

export default function ViagemCard({ viagem }: ViagemCardProps) {
  const navigation = useNavigation<NavigationProp>();

  const handleCardPress = () => {
    navigation.navigate('DetalhesViagem', { viagem });
  };

  // Função para definir as cores com base no status
  const getStatusStyles = (status: string) => {
    switch (status) {
      case 'Em andamento':
        return { backgroundColor: '#FFD70050', color: '#FFD700' }; // Amarelo
      case 'Encerrada':
        return { backgroundColor: '#FF450050', color: '#FF4500' }; // Vermelho
      default:
        return { backgroundColor: '#00B37E50', color: '#00B37E' }; // Verde (Disponível)
    }
  };

  const statusStyles = getStatusStyles(viagem.status);

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
            <View style={[styles.valueStatusBadge, { backgroundColor: statusStyles.backgroundColor }]}>
              <Text style={[styles.valueStatus, { color: statusStyles.color }]}>{viagem.status}</Text>
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
