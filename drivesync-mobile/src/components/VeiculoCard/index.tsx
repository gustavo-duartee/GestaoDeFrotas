import React from "react";
import { View, Text } from "react-native";
import { Ionicons } from '@expo/vector-icons';
import { TouchableOpacity } from "react-native-gesture-handler";
import { useNavigation } from '@react-navigation/native';
import styles from './styles';
import { StackNavigationProp } from '../../@type/navigation';

type NavigationProp = StackNavigationProp<RootStackParamList, 'DetalhesVeiculo'>;

interface VeiculoCardProps {
  veiculo: {
    id: number;
    marca: string;
    modelo: string;
    ano: number;
    placa: string;
    quilometragem: number;
    tp_combustivel: string;
    dt_aquisicao: string;
    status: string;
  };
}

export default function VeiculoCard({ veiculo }: VeiculoCardProps) {
  const navigation = useNavigation<NavigationProp>();

  const handleCardPress = () => {
    navigation.navigate('DetalhesVeiculo', { veiculo });
  };

  // Função para definir as cores com base no status
  const getStatusStyles = (status: string) => {
    switch (status) {
      case 'Em uso':
        return { backgroundColor: '#b3b100', color: '#545454' }; // Amarelo
      case 'Em manutenção':
        return { backgroundColor: '#b30000', color: '#545454' }; // Vermelho
      default:
        return { backgroundColor: '#00B37E', color: '#545454' }; // Verde (Disponível)
    }
  };

  const statusStyles = getStatusStyles(veiculo.status);

  return (
    <TouchableOpacity onPress={handleCardPress}>
      <View style={styles.container}>
        <View style={styles.card}>
          {/* Ícone do Veículo */}
          <View style={styles.iconSquare}>
            <Ionicons style={styles.icon} name="bus-outline" size={40} color="white" />
          </View>

          <View style={styles.content}>
            <View style={styles.row}>
              <Text style={styles.valueTitle}>{veiculo.marca}</Text>
              <Text style={styles.valueTitle}>{veiculo.modelo}</Text>
            </View>

            <View style={styles.row}>
              <Text style={styles.valueSubtitle}>{veiculo.placa}</Text>
            </View>

            {/* Status e Círculo de Status */}
            <View style={styles.row}>
              <Text style={[styles.valueStatus, { color: statusStyles.color }]}>{veiculo.status}</Text>
              <View
                style={[styles.statusCircle, { backgroundColor: statusStyles.backgroundColor }]}
              />
            </View>
          </View>

          {/* Ícone Chevron */}
          <View style={styles.iconChevron}>
            <Ionicons name="chevron-forward-outline" size={30} color="#8D8D99" />
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );
}
