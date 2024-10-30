import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';

const DetalhesViagem = ({ route }) => {
  const { viagem } = route.params; // Obtém os detalhes da viagem passados como parâmetros

  return (
    <ScrollView style={styles.container}>
      <View style={styles.detailContainer}>
        <Text style={styles.label}>ID da Viagem:</Text>
        <Text style={styles.detail}>{viagem.id}</Text>
      </View>
      <View style={styles.detailContainer}>
        <Text style={styles.label}>Motorista ID:</Text>
        <Text style={styles.detail}>{viagem.motoristaId}</Text>
      </View>
      <View style={styles.detailContainer}>
        <Text style={styles.label}>Veículo ID:</Text>
        <Text style={styles.detail}>{viagem.veiculoId}</Text>
      </View>
      <View style={styles.detailContainer}>
        <Text style={styles.label}>Data de Início:</Text>
        <Text style={styles.detail}>{new Date(viagem.dataInicio).toLocaleString()}</Text>
      </View>
      <View style={styles.detailContainer}>
        <Text style={styles.label}>Localização:</Text>
        <Text style={styles.detail}>{viagem.localizacao}</Text>
      </View>
      <View style={styles.detailContainer}>
        <Text style={styles.label}>Status:</Text>
        <Text style={styles.detail}>{viagem.status}</Text>
      </View>
      <View style={styles.detailContainer}>
        <Text style={styles.label}>Observações:</Text>
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
    padding: 16,
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16,
  },
  detailContainer: {
    marginBottom: 12,
  },
  label: {
    fontSize: 16,
    fontWeight: '600',
  },
  detail: {
    fontSize: 16,
    color: '#555',
  },
  checklistContainer: {
    marginTop: 20,
  },
  checklistItem: {
    fontSize: 16,
    color: '#555',
  },
});

export default DetalhesViagem;
