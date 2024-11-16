import React, { useEffect, useState } from "react";
import { View, Text, TextInput, FlatList, ActivityIndicator } from "react-native";
import styles from './styles';
import ViagemCard from "../../components/ViagemCard";  // Componente para exibir cada card de viagem
import CardViagemStatus from "../../components/ViagemStatus"; // Componente que mostra o status da viagem em andamento
import api from "../../services/api";

const Atividade: React.FC = () => {
  const [viagens, setViagens] = useState([]);
  const [loading, setLoading] = useState(true);
  const [filtroStatus, setFiltroStatus] = useState<string | null>(null);

  // Função para buscar atividades
  const fetchAtividades = async () => {
    try {
      const response = await api.get('/api/Viagens');
      setViagens(response.data);
      setLoading(false);
    } catch (error) {
      console.error(error);
      setLoading(false);
    }
  };

  useEffect(() => {
    // Chama a função de fetch inicial
    fetchAtividades();

    // Configura o polling para chamadas periódicas
    const interval = setInterval(() => {
      fetchAtividades();
    }, 10000); // Atualiza a cada 10 segundos

    // Limpa o intervalo quando o componente for desmontado
    return () => clearInterval(interval);
  }, []);

  const handleFiltrar = (status: string | null) => {
    setFiltroStatus(status);
  };

  const atividadesFiltradas = filtroStatus
    ? viagens.filter(viagem => viagem.status === filtroStatus)
    : viagens;

  // Filtra a viagem que está com o status "Em andamento" para exibir no CardViagemStatus
  const viagemEmAndamento = viagens.find(viagem => viagem.status === 0); // Verifique se "1" é o valor correto
  const outrasViagens = atividadesFiltradas.filter(viagem => viagem.status === 1);

  if (loading) {
    return (
      <View style={styles.container}>
        <ActivityIndicator size="large" color="#00ff00" />
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <View style={styles.searchContainer}>
        <TextInput
          style={styles.input}
          placeholder="Pesquise atividades"
          placeholderTextColor="#aaa"
        />
      </View>

      {/* Renderiza o CardViagemStatus para viagem em andamento, se existir */}
      {viagemEmAndamento ? (
        <CardViagemStatus viagem={viagemEmAndamento} />
      ) : (
        <Text style={styles.noViagemText}>Nenhuma viagem em andamento.</Text>
      )}

      <Text style={styles.subtitle}>Anteriores</Text>

      {/* Renderiza os cards de todas as viagens, exceto a viagem em andamento */}
      <FlatList
        data={outrasViagens}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => <ViagemCard viagem={item} />}
        contentContainerStyle={styles.cardContainer}
        ListEmptyComponent={<Text style={styles.noViagemText}>Nenhuma atividade encontrada.</Text>}
      />
    </View>
  );
}

export default Atividade;
