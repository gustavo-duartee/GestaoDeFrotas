import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import axios from 'axios';
import api from '../../services/api';

const DetalhesViagem = ({ route }) => {
  const { viagem } = route.params; // Obtém os detalhes da viagem passados como parâmetros
  const [veiculo, setVeiculo] = useState(null); // Estado para armazenar os dados do veículo

  // Função para buscar os detalhes do veículo pela API
  const buscarDetalhesVeiculo = async (id) => {
    try {
      const response = await api.get(`/api/Veiculos/${id}`); // Faz a requisição à API
      setVeiculo(response.data); // Atualiza o estado com os dados do veículo
    } catch (error) {
      console.error("Erro ao buscar dados do veículo", error);
    }
  };

  useEffect(() => {
    if (viagem.veiculoId) {
      buscarDetalhesVeiculo(viagem.veiculoId); // Chama a função para buscar os dados do veículo
    }
  }, [viagem.veiculoId]);

  const formatarData = (data) => {
    if (!data) return ''; // Verifica se a data existe
    return new Date(data).toLocaleDateString('pt-BR', {
      day: '2-digit',
      month: 'short',
      year: 'numeric',
    }) + ' ' +
      new Date(data).toLocaleTimeString('pt-BR', { hour: '2-digit', minute: '2-digit' });
  };

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>Informações da Viagem</Text>

      {/* Seção: Localização e Início */}
      <View style={styles.detailContainer}>
        <Text style={styles.label}>
          <Ionicons name="navigate-sharp" size={20} color="#000" /> {viagem.localizacaoInicio}
        </Text>
        <Text style={styles.detail}>{formatarData(viagem.dataInicio)}</Text>
        <Text style={styles.detail}>{viagem.observacoesInicio}</Text>
      </View>

      {/* Seção: Localização e Encerramento */}
      <View style={styles.detailContainer}>
        <Text style={styles.label}>
          <Ionicons name="flag-sharp" size={20} color="#000" /> {viagem.localizacaoEncerramento}
        </Text>
        <Text style={styles.detail}>{formatarData(viagem.dataEncerramento)}</Text>
        <Text style={styles.detail}>{viagem.observacoesEncerramento}</Text>
      </View>

      {/* Seção: Informações do Veículo */}
      <Text style={styles.title}>Informações do Veículo</Text>
      {veiculo ? (
        <View style={styles.detailContainer}>
          <Text style={styles.detail}>{veiculo.marca} {veiculo.modelo}</Text>
          <Text style={styles.detail}>Ano: {veiculo.ano}</Text>
          <Text style={styles.detail}>Placa: {veiculo.placa}</Text>
          <Text style={styles.detail}>Quilometragem: {veiculo.quilometragem} km</Text>
          <Text style={styles.detail}>Tipo de Combustível: {veiculo.tp_combustivel}</Text>
          <Text style={styles.detail}>Cor: {veiculo.cor}</Text>
          <Text style={styles.detail}>Passageiros: {veiculo.cap_passageiros}</Text>
        </View>
      ) : (
        <Text style={styles.detail}>Carregando informações do veículo...</Text>
      )}

      <Text style={styles.title}>Diagnostico do veiculo</Text>


      {/* Seção: Diagnostico */}
      <View style={styles.diagnosticoContainer}>
        {/* Início da viagem */}
        <View style={styles.diagnosticoItem}>
          <Text style={styles.label}>
            Inicio
          </Text>
          <Text style={styles.detail}>{viagem.nivelCombustivelInicio}</Text>
        </View>

        {/* Encerramento da viagem */}
        <View style={styles.diagnosticoItem}>
          <Text style={styles.label}>
            Fim
          </Text>
          <Text style={styles.detail}>{viagem.nivelCombustivelEncerramento}</Text>
        </View>
      </View>

      {/* Seção: Diagnostico */}
      <View style={styles.diagnosticoContainer}>
        {/* Início da viagem */}
        <View style={styles.diagnosticoItem}>
          <Text style={styles.detail}>{viagem.statusControleEmissaoInicio}</Text>
        </View>

        {/* Encerramento da viagem */}
        <View style={styles.diagnosticoItem}>
          <Text style={styles.detail}>{viagem.statusControleEmissaoEncerramento}</Text>
        </View>
      </View>

      {/* Seção: Diagnostico */}
      <View style={styles.diagnosticoContainer}>
        {/* Início da viagem */}
        <View style={styles.diagnosticoItem}>
          <Text style={styles.detail}>{viagem.monitorCatalisadorInicio}</Text>
        </View>

        {/* Encerramento da viagem */}
        <View style={styles.diagnosticoItem}>
          <Text style={styles.detail}>{viagem.monitorCatalisadorEncerramento}</Text>
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20,
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginVertical: 12,
    color: '#333',
    textAlign: 'left',
  },
  detailContainer: {
    marginBottom: 16,
    paddingVertical: 12,
    paddingHorizontal: 0,
    backgroundColor: '#fff',
    borderRadius: 8,
  },
  label: {
    fontSize: 16,
    fontWeight: '600',
    color: '#000',
  },
  detail: {
    fontSize: 16,
    color: '#555',
    marginTop: 6,
  },
  diagnosticoContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  diagnosticoItem: {
    flex: 1,
    paddingVertical: 12,
    backgroundColor: '#fff',
    borderRadius: 8,
    paddingHorizontal: 0,
  },
});

export default DetalhesViagem;
