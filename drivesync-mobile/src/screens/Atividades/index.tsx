import React, { useEffect, useState } from "react";
import { View, Text, TextInput, FlatList, ActivityIndicator, TouchableOpacity } from "react-native";
import styles from './styles';
import ViagemCard from "../../components/ViagemCard";
import api from "../../services/api";

const Atividade: React.FC = () => {
  const [viagens, setViagens] = useState([]);
  const [loading, setLoading] = useState(true);
  const [filtroStatus, setFiltroStatus] = useState<string | null>(null);

  useEffect(() => {
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
  }, []);

  const handleFiltrar = (status: string | null) => {
    setFiltroStatus(status);
  };

  const atividadesFiltradas = filtroStatus ? viagens.filter(viagem => viagem.status === filtroStatus) : viagens;

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

      <FlatList
        data={atividadesFiltradas}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => <ViagemCard viagem={item} />}
        contentContainerStyle={styles.cardContainer}
      />
    </View>
  );
}

export default Atividade;
