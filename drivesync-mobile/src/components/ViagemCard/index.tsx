import React, { useState, useEffect } from "react";
import { View, Text } from "react-native";
import { Ionicons } from '@expo/vector-icons';
import { TouchableOpacity } from "react-native-gesture-handler";
import { useNavigation } from '@react-navigation/native';
import styles from './styles';
import { StackNavigationProp } from '../../@type/navigation';
import { connectSignalR, listenToUpdates, disconnectSignalR } from "../../services/signalRService";

import api from "../../services/api";

type NavigationProp = StackNavigationProp<RootStackParamList, 'DetalhesViagem'>;

interface ViagemCardProps {
  viagem: {
    id: number;
    origem: string;
    destino: string;
    motorista: string;
    veiculo: string;
    dataInicio: string;
    dataEncerramento: string;
    status: string;
    localizacaoInicio?: string;
    localizacaoEncerramento?: string;
  };
}

export default function ViagemCard({ viagem }: ViagemCardProps) {
  const navigation = useNavigation<NavigationProp>();
  const [viagemAtualizada, setViagemAtualizada] = useState(viagem);
  const [modeloVeiculo, setModeloVeiculo] = useState<string | null>(null);
  const [marcaVeiculo, setMarcaVeiculo] = useState<string | null>(null);

  const handleCardPress = () => {
    navigation.navigate('DetalhesViagem', { viagem: viagemAtualizada });
  };

  const buscarDetalhesVeiculo = async (
    id: number,
    setModelo: (modelo: string) => void,
    setMarca: (marca: string) => void
  ) => {
    try {
      const response = await api.get(`/api/Veiculos/${id}`); // Faz a requisição à API
      setModelo(response.data.modelo); // Atualiza o estado com o modelo do veículo
      setMarca(response.data.marca);  // Atualiza o estado com a marca do veículo
    } catch (error) {
      console.error("Erro ao buscar dados do veículo", error);
    }
  };
  
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

  // Conectar ao SignalR quando o componente for montado
  useEffect(() => {
    // Busca os detalhes do veículo ao carregar o card
    if (viagem.veiculoId) {
      buscarDetalhesVeiculo(viagem.veiculoId, setModeloVeiculo, setMarcaVeiculo);
    }

    const connection = connectSignalR();

    // Escutar por atualizações e atualizar o estado da viagem
    listenToUpdates((data) => {
      if (data.id === viagem.id) {
        setViagemAtualizada(data);  // Atualiza os dados da viagem com as novas informações
        if (data.veiculoId) {
          buscarDetalhesVeiculo(data.veiculoId, setModeloVeiculo, setMarcaVeiculo);
        }
      }
    });

    // Limpar a conexão SignalR ao desmontar o componente
    return () => {
      disconnectSignalR();
    };
  }, [viagem.id]);

  return (
    <TouchableOpacity onPress={handleCardPress}>
      <View style={styles.container}>
        <View style={styles.card}>
          <View style={styles.iconSquare}>
            <Ionicons style={styles.icon} name="bus-outline" size={35} color="white" />
          </View>

          <View style={styles.content}>
            {/* Exibe localizações, se disponíveis */}
            {viagemAtualizada.localizacaoInicio && viagemAtualizada.localizacaoEncerramento && (
              <View style={styles.row}>
                <Text style={styles.valueTitle}>{viagemAtualizada.localizacaoInicio}</Text>
                <Ionicons name="arrow-forward-outline" size={20} color="#000" />
                <Text style={styles.valueTitle}>{viagemAtualizada.localizacaoEncerramento}</Text>
              </View>
            )}

            {/* Exibe a marca e o modelo do veículo */}
            <View style={styles.row}>
              <Text style={styles.valueSubtitle}>
                {marcaVeiculo ? `${marcaVeiculo} - ${modeloVeiculo}` : 'Carregando...'}
              </Text>
            </View>

            <View style={styles.row}>
              {/* Exibe a data formatada */}
              <Text style={styles.valueSubtitle}>
                {formatarData(viagemAtualizada.dataEncerramento)}
              </Text>
            </View>

            <View style={styles.row}>
              <Text style={styles.valueSubtitle}>
                {viagemAtualizada.status === '1' ? 'Em andamento' : 'Encerrada'}
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
