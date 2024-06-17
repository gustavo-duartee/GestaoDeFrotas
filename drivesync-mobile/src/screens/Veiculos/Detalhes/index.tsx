import React from "react";
import { View, Text, StyleSheet, ScrollView } from "react-native";
import ManutencaoCard from "../../../components/ManutencaoCard";

export default function DetalhesVeiculo({ route }) {
  const { veiculo } = route.params;

  // Ordenar manutenções por data (mais recente primeiro)
  const manutencoesOrdenadas = veiculo.manutencoes.sort((a, b) => new Date(b.dt_manutencao).getTime() - new Date(a.dt_manutencao).getTime());

  // Função para definir as cores com base no status
  const getStatusStyles = (status: string) => {
    switch (status) {
      case 'Em uso':
        return { backgroundColor: '#FFD70050', color: '#FFD700' }; // Amarelo
      case 'Manutenção':
        return { backgroundColor: '#FF450050', color: '#FF4500' }; // Vermelho
      default:
        return { backgroundColor: '#00B37E50', color: '#00B37E' }; // Verde (Disponível)
    }
  };

  const statusStyles = getStatusStyles(veiculo.status);

  return (
    <ScrollView style={styles.container}>
      <View style={styles.infoContainer}>
        <Text style={styles.value}>{veiculo.marca} {veiculo.modelo} - {veiculo.placa}</Text>
      </View>
      <View style={styles.infoContainer}>
        <Text style={styles.subInfo}>{veiculo.quilometragem} Km</Text>
      </View>
      <View style={styles.infoContainer}>
        <Text style={styles.subInfo}>{veiculo.tp_combustivel}</Text>
      </View>
      <View style={[styles.valueStatusBadge, { backgroundColor: statusStyles.backgroundColor }]}>
        <Text style={[styles.infoStatus, { color: statusStyles.color }]}>{veiculo.status}</Text>
      </View>

      <View style={styles.divider} />

      <Text style={styles.subtitle}>Últimas manutenções</Text>

      <View style={styles.cardContainer}>
        {manutencoesOrdenadas.map((manutencao) => (
          <ManutencaoCard key={manutencao.id} manutencao={manutencao} />
        ))}
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#202024",
    padding: 20,
  },
  cardContainer: {
    marginBottom: 30
  },
  infoContainer: {
    flexDirection: "row",
  },
  value: {
    color: '#E1E1E6',
    fontSize: 30,
    fontWeight: 'bold',
  },
  subInfo: {
    color: '#E1E1E6',
    fontSize: 20,
    fontWeight: 'bold',
  },
  infoStatus: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  valueStatusBadge: {
    width: 120,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 10,
    padding: 2,
    marginTop: 6
  },
  divider: {
    height: 2,
    backgroundColor: '#444',
    marginVertical: 20,
  },
  subtitle: {
    color: '#E1E1E6',
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 20,
  },
});
