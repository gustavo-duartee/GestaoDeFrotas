import React, { useEffect, useState } from "react";
import { View, Text, TextInput, FlatList, ActivityIndicator, TouchableOpacity } from "react-native";
import styles from './styles';
import VeiculoCard from "../../components/VeiculoCard";
import api from "../../services/api";

const Veiculo: React.FC = () => {
  const [veiculos, setVeiculos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [filtroStatus, setFiltroStatus] = useState<string | null>(null); // Estado para armazenar o tipo de filtro selecionado

  useEffect(() => {
    async function fetchVeiculos() {
      try {
        const response = await api.get('/api/Veiculos');
        setVeiculos(response.data);
        setLoading(false);
      } catch (error) {
        console.error(error);
        setLoading(false);
      }
    }

    fetchVeiculos();
  }, []);

  const handleFiltrar = (status: string | null) => {
    setFiltroStatus(status);
  };

  const veiculosFiltrados = filtroStatus ? veiculos.filter(veiculo => veiculo.status === filtroStatus) : veiculos;

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
          placeholder="Pesquise aqui"
          placeholderTextColor="#aaa"
        />
      </View>

      <View style={styles.filterContainer}>
        <TouchableOpacity style={[styles.filterButton, filtroStatus === null && styles.filterButtonSelected]} onPress={() => handleFiltrar(null)}>
          <Text style={[styles.filterButtonText, filtroStatus === null && styles.filterButtonTextSelected]}>Todos</Text>
        </TouchableOpacity>
        <TouchableOpacity style={[styles.filterButton, filtroStatus === 'Disponível' && styles.filterButtonSelected]} onPress={() => handleFiltrar('Disponível')}>
          <Text style={[styles.filterButtonText, filtroStatus === 'Disponível' && styles.filterButtonTextSelected]}>Disponível</Text>
        </TouchableOpacity>
        <TouchableOpacity style={[styles.filterButton, filtroStatus === 'Em uso' && styles.filterButtonSelected]} onPress={() => handleFiltrar('Em uso')}>
          <Text style={[styles.filterButtonText, filtroStatus === 'Em uso' && styles.filterButtonTextSelected]}>Em uso</Text>
        </TouchableOpacity>
        <TouchableOpacity style={[styles.filterButton, filtroStatus === 'Manutenção' && styles.filterButtonSelected]} onPress={() => handleFiltrar('Manutenção')}>
          <Text style={[styles.filterButtonText, filtroStatus === 'Manutenção' && styles.filterButtonTextSelected]}>Manutenção</Text>
        </TouchableOpacity>
      </View>
      <FlatList
        data={veiculosFiltrados}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => <VeiculoCard veiculo={item} />}
        contentContainerStyle={styles.cardContainer}
      />
    </View>
  );
}

export default Veiculo;
