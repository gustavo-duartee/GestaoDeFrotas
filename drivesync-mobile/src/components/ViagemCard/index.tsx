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
    dataEncerramento: string; // Verifique se existe esse campo
    status: string; // "1" para em andamento, ou "Encerrada"
    localizacaoInicio?: string; // Se existir, usar
    localizacaoEncerramento?: string; // Se existir, usar
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
      case '1':
        return { backgroundColor: '#FFD70050', color: '#FFD700' }; // Amarelo
      case 'Encerrada':
        return { backgroundColor: '#FF450050', color: '#FF4500' }; // Vermelho
      default:
        return { backgroundColor: '#00B37E50', color: '#00B37E' }; // Verde (Disponível)
    }
  };

  const statusStyles = getStatusStyles(viagem.status);

  // Função para formatar a data
  const formatarData = (data: string) => {
    const dateObj = new Date(data);
    const options: Intl.DateTimeFormatOptions = {
      day: '2-digit',
      month: 'short',
      year: 'numeric',
      hour: '2-digit',
      minute: '2-digit',
    };
    return dateObj.toLocaleString('pt-BR', options).replace(',', ''); // Exemplo: "11 Set, 2024 - 23:00"
  };

  return (
    <TouchableOpacity onPress={handleCardPress}>
      <View style={styles.container}>
        <View style={styles.card}>
          <View style={styles.iconSquare}>
            <Ionicons style={styles.icon} name="bus-outline" size={35} color="white" />
          </View>

          <View style={styles.content}>
            {/* Exibe localizações, se disponíveis */}
            {viagem.localizacaoInicio && viagem.localizacaoEncerramento && (
              <View style={styles.row}>
                <Text style={styles.valueTitle}>{viagem.localizacaoInicio}</Text>
                <Ionicons name="arrow-forward-outline" size={20} color="#000" />
                <Text style={styles.valueTitle}>{viagem.localizacaoEncerramento}</Text>
              </View>
            )}

            <View style={styles.row}>
              <Text style={styles.valueSubtitle}>Veículo: {viagem.veiculoId}</Text>
            </View>

            <View style={styles.row}>
              {/* Exibe a data formatada */}
              <Text style={styles.valueSubtitle}>
                {formatarData(viagem.dataEncerramento)}
              </Text>
            </View>

            <View style={styles.row}>
              <Text style={styles.valueSubtitle}>
                {viagem.status === '1' ? 'Em andamento' : 'Encerrada'}
              </Text>
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
