import React, { useEffect, useState } from "react";
import { View, Text, ScrollView, StyleSheet, ActivityIndicator } from "react-native";
import { useAuth } from "../../contexts/auth";
import { FontAwesome5 } from '@expo/vector-icons'; // Importando ícones
import CardViagemStatus from "../../components/ViagemStatus"; // Componente que mostra o status da viagem em andamento
import api from "../../services/api";
import { connectSignalR, listenToUpdates, disconnectSignalR } from "../../services/signalRService"; // Importa funções do SignalR

const Home: React.FC = () => {
  const { user } = useAuth();
  const [viagens, setViagens] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [filtroStatus, setFiltroStatus] = useState<string | null>(null);

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

  const viagemEmAndamento = viagens.find(viagem => viagem.status === 0); // Verifique se "0" é o valor correto
  const outrasViagens = atividadesFiltradas.filter(viagem => viagem.status === 1);

  if (loading) {
    return (
      <View style={styles.container}>
        <ActivityIndicator size="large" color="#00ff00" />
      </View>
    );
  }

  return (
    <ScrollView style={styles.container}>
      {/* Saudação personalizada com o nome do usuário */}
      <View style={styles.header}>
        <Text style={styles.greeting}>Bem-vindo, {user?.name || "Usuário"}!</Text>
      </View>

      {/* Renderiza o CardViagemStatus para viagem em andamento, se existir */}
      {viagemEmAndamento ? (
        <CardViagemStatus viagem={viagemEmAndamento} />
      ) : (
        <Text style={styles.noViagemText}>Nenhuma viagem em andamento.</Text>
      )}

      {/* Resumo de Viagens com ícones */}
      <Text style={styles.subtitle}>Resumo de Viagens</Text>
      <View style={styles.summaryContainer}>
        <View style={styles.summaryCard}>
          <FontAwesome5 name="route" size={24} color="#000" />
          <Text style={styles.summaryText}>Total de viagens registradas: {viagens.length}</Text>
        </View>
        <View style={styles.summaryCard}>
          <FontAwesome5 name="calendar" size={24} color="#000" />
          <Text style={styles.summaryText}>Última viagem: {viagens[0]?.data_inicio || 'Não disponível'}</Text>
        </View>
      </View>

      {/* Estatísticas com ícones e cards */}
      <Text style={styles.subtitle}>Estatísticas</Text>
      <View style={styles.cardsContainer}>
        <View style={styles.card}>
          <FontAwesome5 name="route" size={24} color="#000" />
          <Text style={styles.cardText}>Viagens em andamento: {viagens.filter(v => v.status === 0).length}</Text>
        </View>
        <View style={styles.card}>
          <FontAwesome5 name="check-circle" size={24} color="#000" />
          <Text style={styles.cardText}>Viagens concluídas: {viagens.filter(v => v.status === 1).length}</Text>
        </View>
        <View style={styles.card}>
          <FontAwesome5 name="calendar" size={24} color="#000" />
          <Text style={styles.cardText}>Última viagem: {viagens[0]?.data_inicio || 'Não disponível'}</Text>
        </View>
      </View>
    </ScrollView>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
    padding: 12,
    paddingVertical: 30,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
    marginTop: 10,
  },
  greeting: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#000000',
  },
  subtitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#000000',
    marginVertical: 15,
  },
  summaryContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: 15,
  },
  summaryCard: {
    backgroundColor: '#f5f5f5',
    padding: 15,
    borderRadius: 8,
    width: '48%',
    alignItems: 'center',
    justifyContent: 'center',
    elevation: 3,
  },
  summaryText: {
    fontSize: 16,
    color: '#333',
    marginTop: 10,
    textAlign: 'center',
  },
  statisticsContainer: {
    padding: 10,
    backgroundColor: '#f5f5f5',
    borderRadius: 8,
    marginVertical: 15,
  },
  statText: {
    fontSize: 16,
    color: '#333',
  },
  cardsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: 15,
  },
  card: {
    backgroundColor: '#f5f5f5',
    padding: 15,
    borderRadius: 8,
    width: '30%',
    alignItems: 'center',
    justifyContent: 'center',
    elevation: 3,
  },
  cardText: {
    fontSize: 16,
    color: '#333',
    marginTop: 10,
    textAlign: 'center',
  },
  noViagemText: {
    fontSize: 18,
    textAlign: 'center',
    marginVertical: 20,
    color: '#888',
  },
});
