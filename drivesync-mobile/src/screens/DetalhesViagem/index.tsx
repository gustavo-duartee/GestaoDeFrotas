import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';

const DetalhesViagem = ({ route }) => {
  const { viagem } = route.params; // Obtém os detalhes da viagem passados como parâmetros

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>Informações da Viagem</Text>
      <View style={styles.detailContainer}>
        <Text style={styles.label}>Veículo ID</Text>
        <Text style={styles.detail}>{viagem.veiculoId}</Text>
      </View>
      <View style={styles.detailContainer}>
        <Text style={styles.label}>Data de Início</Text>
        <Text style={styles.detail}>{new Date(viagem.dataInicio).toLocaleString()}</Text>
      </View>
      <View style={styles.detailContainer}>
        <Text style={styles.label}>Status</Text>
        <Text style={styles.detail}>{viagem.status}</Text>
      </View>
      <View style={styles.detailContainer}>
        <Text style={styles.label}>Localização</Text>
        <Text style={styles.detail}>{viagem.localizacao}</Text>
      </View>

      <View style={styles.detailContainer}>
        <Text style={styles.label}>Observações</Text>
        <Text style={styles.detail}>{viagem.observacoes}</Text>
      </View>

      <View style={styles.checklistContainer}>
        <Text style={styles.label}>Checklist:</Text>
        {Object.entries(viagem.checklist).map(([key, value]) => (
          <Text key={key} style={styles.checklistItem}>
            {key.charAt(0).toUpperCase() + key.slice(1)}: {value ? '✔️' : '❌'}
          </Text>
        ))}
      </View>

    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 0,
    paddingHorizontal: 12,
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16,
    color: '#000',
    textAlign: 'left',
  },
  detailContainer: {
    marginBottom: 12,
    paddingVertical: 10,
    backgroundColor: '#fff',
    borderRadius: 8
  },
  label: {
    fontSize: 16,
    fontWeight: '600',
    color: '#333',
  },
  detail: {
    fontSize: 16,
    color: '#555',
    marginTop: 4,
  },
  checklistContainer: {
    marginTop: 20,
    paddingVertical: 10,
    backgroundColor: '#fff',
    borderRadius: 8
  },
  checklistItem: {
    fontSize: 16,
    color: '#555',
    marginTop: 4,
  },
});

export default DetalhesViagem;
