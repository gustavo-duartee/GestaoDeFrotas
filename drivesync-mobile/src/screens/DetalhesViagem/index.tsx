import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const DetalhesViagem = ({ route }) => {
  const { viagem } = route.params; // Obtém os detalhes da viagem passados como parâmetros

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>Informações da Viagem</Text>

      <View style={styles.detailContainer}>
        
        <Text style={styles.label}><Ionicons name="navigate-sharp" size={20} color="#000" /> {viagem.localizacaoInicio}</Text>
        <Text style={styles.detail}>
          {new Date(viagem.dataInicio).toLocaleDateString('pt-BR', {
            day: '2-digit',
            month: 'short',
            year: 'numeric',
          })}{' '}
          - {new Date(viagem.dataInicio).toLocaleTimeString('pt-BR', { hour: '2-digit', minute: '2-digit' })}
        </Text>
        <Text style={styles.detail}>{viagem.observacoesInicio}</Text>
      </View>


      <View style={styles.detailContainer}>
        <Text style={styles.label}><Ionicons name="flag-sharp" size={20} color="#000" /> {viagem.localizacaoEncerramento}</Text>
        <Text style={styles.detail}>
          {new Date(viagem.dataEncerramento).toLocaleDateString('pt-BR', {
            day: '2-digit',
            month: 'short',
            year: 'numeric',
          })}{' '}
          - {new Date(viagem.dataEncerramento).toLocaleTimeString('pt-BR', { hour: '2-digit', minute: '2-digit' })}
        </Text>
        <Text style={styles.detail}>{viagem.observacoesEncerramento}</Text>
      </View>


      {/* Seção: Informações do Veículo */}
      <Text style={styles.title}>Informações do Veículo</Text>

      <View style={styles.detailContainer}>
        <Text style={styles.detail}><Ionicons name="bus-sharp" size={20} color="#000" /> {viagem.veiculoId}</Text>
      </View>

      {/* Seção: Comparativo */}
      <Text style={styles.title}>Comparativo</Text>

      {/* Comparativo de Quilometragem */}
      <View style={styles.compareContainer}>
        <View style={styles.compareItem}>
          <Text style={styles.compareLabel}>Quilometragem</Text>
          <View style={styles.compareValues}>
            <Text style={styles.compareValue}>{viagem.quilometragemInicial} km</Text>
            <Text style={styles.compareValue}>{viagem.quilometragemFinal} km</Text>
          </View>
        </View>
      </View>

      {/* Comparativo de Nível de Combustível */}
      <View style={styles.compareContainer}>
        <View style={styles.compareItem}>
          <Text style={styles.compareLabel}>Nível de Combustível</Text>
          <View style={styles.compareValues}>
            <Text style={styles.compareValue}>{viagem.nivelCombustivelInicial} %</Text>
            <Text style={styles.compareValue}>{viagem.nivelCombustivelFinal} %</Text>
          </View>
        </View>
      </View>

      {/* Comparativo de Temperatura do Motor */}
      <View style={styles.compareContainer}>
        <View style={styles.compareItem}>
          <Text style={styles.compareLabel}>Temperatura do Motor</Text>
          <View style={styles.compareValues}>
            <Text style={styles.compareValue}>{viagem.temperaturaMotorInicial} °C</Text>
            <Text style={styles.compareValue}>{viagem.temperaturaMotorFinal} °C</Text>
          </View>
        </View>
      </View>

    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
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
    paddingVertical: 8,
    backgroundColor: '#fff',
    borderRadius: 8,
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
  compareContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: 10,
  },
  compareItem: {
    width: '48%',
  },
  compareLabel: {
    fontSize: 16,
    fontWeight: '600',
    color: '#333',
  },
  compareValues: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  compareValue: {
    fontSize: 16,
    color: '#555',
    marginTop: 4,
  },
});

export default DetalhesViagem;
