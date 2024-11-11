import React from "react";
import { View, Text, StyleSheet, ScrollView } from "react-native";
import ManutencaoCard from "../../../components/ManutencaoCard";

export default function DetalhesVeiculo({ route }) {
  const { veiculo } = route.params;

  // Ordenar manutenções por data (mais recente primeiro)
  const manutencoesOrdenadas = veiculo.manutencoes.sort((a, b) => new Date(b.dt_manutencao).getTime() - new Date(a.dt_manutencao).getTime());

  // Função para definir as cores com base no status
  const getStatusStyles = (status) => {
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
        <Text style={styles.subInfo}>Quilometragem atual: {veiculo.quilometragem} Km</Text>
      </View>
      <View style={styles.infoContainer}>
        <Text style={styles.subInfo}>Tipo de combustível: {veiculo.tp_combustivel}</Text>
      </View>
      <View style={styles.infoContainer}>
        <Text style={styles.subInfo}>Cor: {veiculo.cor}</Text>
      </View>
      <View style={styles.infoContainer}>
        <Text style={styles.subInfo}>Capacidade: {veiculo.cap_passageiros}</Text>
      </View>
      <View style={[styles.valueStatusBadge, { backgroundColor: statusStyles.backgroundColor }]}>
        <Text style={[styles.infoStatus, { color: statusStyles.color }]}>{veiculo.status}</Text>
      </View>

      <View style={styles.divider} />


      <View style={styles.cardContainer}>
      <Text style={styles.subtitle}>Últimas manutenções</Text>


        {manutencoesOrdenadas.length > 0 ? (
          manutencoesOrdenadas.map((manutencao) => (
            <ManutencaoCard key={manutencao.id} manutencao={manutencao} />
          ))
        ) : (
          <Text style={styles.noManutencaoText}>Não há nenhuma manutenção cadastrada.</Text>
        )}
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    padding: 15,
  },
  cardContainer: {
    marginBottom: 30
  },
  infoContainer: {
    flexDirection: "row",
  },
  value: {
    color: '#000',
    fontSize: 26,
    fontWeight: 'bold',
  },
  subInfo: {
    color: '#000',
    fontSize: 20,
    fontWeight: 'semibold',
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
  },
  divider: {
    height: 1,
    backgroundColor: '#e8e8e8',
    marginVertical: 20,
  },
  subtitle: {
    color: '#000',
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  noManutencaoText: {
    color: '#888',
    fontSize: 16,
    textAlign: 'center',
    marginTop: 20,
  },
});
