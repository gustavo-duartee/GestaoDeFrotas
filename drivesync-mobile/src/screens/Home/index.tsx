import React, { useEffect, useState } from "react";
import { View, Text, ScrollView, StyleSheet, ActivityIndicator } from "react-native";
import { useAuth } from "../../contexts/auth";
import MediaCard from "../../components/InfoCards";
import CardViagemStatus from "../../components/ViagemStatus"; // Componente que mostra o status da viagem em andamento
import api from "../../services/api";
import { connectSignalR, listenToUpdates, disconnectSignalR } from "../../services/signalRService"; // Importa funções do SignalR

const Home: React.FC = () => {
  const { user } = useAuth();
  const [viagens, setViagens] = useState([]);
  const [loading, setLoading] = useState(true);
  const [filtroStatus, setFiltroStatus] = useState<string | null>(null);
  const [viagemEmAndamento, setViagemEmAndamento] = useState<any>(null);

  useEffect(() => {
    // Função para buscar as viagens da API
    async function fetchAtividades() {
      try {
        const response = await api.get('/api/Viagens');
        setViagens(response.data);
        setLoading(false);
      } catch (error) {
        console.error(error);
        setLoading(false);
      }
    }

    fetchAtividades();

    // Conectar ao SignalR quando o componente for montado
    const connection = connectSignalR();

    // Ouvir as atualizações do SignalR
    listenToUpdates((data) => {
      console.log('Viagem atualizada via SignalR:', data);
      setViagens((prevViagens) => {
        // Atualiza as viagens com a nova informação
        return prevViagens.map(viagem =>
          viagem.id === data.id ? { ...viagem, ...data } : viagem
        );
      });
      // Atualiza a viagem em andamento se houver uma mudança no status
      const viagemEmAndamento = data.status === 0 ? data : viagemEmAndamento;
      setViagemEmAndamento(viagemEmAndamento);
    });

    // Desconectar ao desmontar o componente
    return () => {
      disconnectSignalR();
    };
  }, [viagemEmAndamento]); // Rerun a lógica de atualização de viagem em andamento

  // Filtra a viagem que está com o status "Em andamento" para exibir no CardViagemStatus
  const viagemEmAndamentoAPI = viagens.find(viagem => viagem.status === 0); // Verifique se "0" é o valor correto para "Em andamento"

  if (loading) {
    return (
      <View style={styles.container}>
        <ActivityIndicator size="large" color="#00ff00" />
      </View>
    );
  }

  // Verificação de diagnóstico para a viagem em andamento
  console.log("Viagem em andamento:", viagemEmAndamentoAPI);

  return (
    <ScrollView style={styles.container}>
      {/* Renderiza o CardViagemStatus para viagem em andamento, se existir */}
      {viagemEmAndamentoAPI || viagemEmAndamento ? (
        <CardViagemStatus viagem={viagemEmAndamentoAPI || viagemEmAndamento} />
      ) : (
        <Text style={styles.noViagemText}>Nenhuma viagem em andamento.</Text>
      )}

      <Text style={styles.subtitle}>Atente-se aos sinais</Text>

      {/* ScrollView horizontal para os cards */}
      <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.cardsContainer}>
        <MediaCard />
      </ScrollView>

      <Text style={styles.subtitle}>Segurança em primeiro lugar</Text>

      {/* ScrollView horizontal para os cards */}
      <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.cardsContainer}>
        <MediaCard />
      </ScrollView>
    </ScrollView>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
    padding: 12,
    paddingVertical: 30
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
    marginTop: 10
  },
  greeting: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#000000',
  },
  subGreeting: {
    fontSize: 18,
    color: '#000000',
  },
  divider: {
    height: 2,
    backgroundColor: '#f3f3f3',
    marginVertical: 10,
  },
  subtitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#000000',
    marginVertical: 15,
  },
  cardsContainer: {
    flexDirection: 'row',
  },
  headerContent: {
    marginLeft: 10
  },
  noViagemText: {
    fontSize: 18,
    textAlign: 'center',
    marginVertical: 20,
    color: '#888',
  },
});
