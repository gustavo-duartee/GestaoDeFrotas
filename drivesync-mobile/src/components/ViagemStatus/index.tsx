import React from "react";
import { View, Text } from "react-native";
import { Ionicons } from '@expo/vector-icons';
import { TouchableOpacity } from "react-native-gesture-handler";
import { useNavigation } from '@react-navigation/native';
import styles from './styles';
import { StackNavigationProp } from '../../@type/navigation';

type NavigationProp = StackNavigationProp<RootStackParamList, 'EncerrarViagem'>;

interface ViagemCardProps {
  viagem: {
    id: number;
    origem: string;
    destino: string;
    dataInicio: string;
    status: string;
  } | null;
}

export default function ViagemCard({ viagem }: ViagemCardProps) {
  const navigation = useNavigation<NavigationProp>();

  const handleCardPress = () => {
    if (viagem) {
      navigation.navigate('EncerrarViagem', { viagem });
    }
  };

  // Função para definir as cores com base no status
  const getStatusStyles = (status: string) => {
    switch (status) {
      default:
        return { backgroundColor: '#00B37E50', color: '#00B37E' }; // Vermelho para status desconhecido
    }
  };

  const statusStyles = viagem ? getStatusStyles(viagem.status) : { backgroundColor: '#8D8D99', color: '#8D8D99' };

  return (
    <TouchableOpacity onPress={handleCardPress} disabled={!viagem}>
      <View style={styles.container}>
        <View style={styles.card}>

          <View style={styles.content}>
            {viagem ? (
              <>
                <View style={styles.row}>
                  <Text style={styles.valueTitle}>{viagem.localizacaoInicio}</Text>
                </View>
                <View style={styles.row}>
                  <Text style={styles.valueSubtitle}>
                    {new Date(viagem.dataInicio).toLocaleDateString('pt-BR', {
                      day: '2-digit',
                      month: 'short',
                      year: 'numeric'
                    })} - {new Date(viagem.dataInicio).toLocaleTimeString('pt-BR', { hour: '2-digit', minute: '2-digit' })}
                  </Text>
                </View>
                <View style={styles.row}>
                  <Text style={styles.valueSubtitle}>Veículo: {viagem.veiculoId}</Text>
                </View>
                <View style={[styles.valueStatusBadge, { backgroundColor: statusStyles.backgroundColor }]}>
                  <Text style={[styles.valueStatus, { color: statusStyles.color }]}>
                    {viagem.status === '0' ? 'Encerrada' : 'Em andamento'}
                  </Text>
                </View>
              </>
            ) : (
              <Text style={styles.valueTitle}>Nenhuma Viagem em Andamento</Text>
            )}
          </View>

          <View style={styles.iconChevron}>
            {viagem && <Ionicons name="chevron-forward-outline" size={30} color="#8D8D99" />}
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );
}
