import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
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


      {/* Seção: Comparativo do Diagnostico */}
      <View style={styles.diagnosticoContainer}>
        {/* Início da viagem */}
        <View style={styles.diagnosticoItem}>
          <Text style={styles.label}>
            Combustível
          </Text>
          <Text style={styles.detail}>{viagem.nivelCombustivelInicio} L</Text>
        </View>

        {/* Encerramento da viagem */}
        <View style={styles.diagnosticoItem}>
          <Text style={styles.label}>
            
          </Text>
          <Text style={styles.detail}>{viagem.nivelCombustivelEncerramento} L</Text>
        </View>
      </View>

      <View style={styles.diagnosticoContainer}>
        {/* Temperatura do Sensor 02 */}
        <View style={styles.diagnosticoItem}>
          <Text style={styles.label}>
            Temperatura do Sensor
          </Text>
          <Text style={styles.detail}>{viagem.temperaturaSensor02Inicio} °C</Text>
        </View>

        {/* Encerramento da viagem */}
        <View style={styles.diagnosticoItem}>
          <Text style={styles.label}>
            
          </Text>
          <Text style={styles.detail}>{viagem.temperaturaSensor02Inicio} °C</Text>
        </View>
      </View>

      <View style={styles.diagnosticoContainer}>
        {/* Temperatura da Transmissão */}
        <View style={styles.diagnosticoItem}>
          <Text style={styles.label}>
            Temperatura da Transmissão
          </Text>
          <Text style={styles.detail}>{viagem.temperaturaTransmissaoInicio} °C</Text>
        </View>

        {/* Encerramento da viagem */}
        <View style={styles.diagnosticoItem}>
          <Text style={styles.label}>
          </Text>
          <Text style={styles.detail}>{viagem.temperaturaTransmissaoEncerramento} °C</Text>
        </View>
      </View>

      <View style={styles.diagnosticoContainer}>
        {/* Código de Falha */}
        <View style={styles.diagnosticoItem}>
          <Text style={styles.label}>
            Código de Falha
          </Text>
          <Text style={styles.detail}>{viagem.codigoFalhaInicio} °C</Text>
        </View>

        {/* Encerramento da viagem */}
        <View style={styles.diagnosticoItem}>
          <Text style={styles.label}>
          </Text>
          <Text style={styles.detail}>{viagem.codigoFalhaEncerramento} °C</Text>
        </View>
      </View>

      <View style={styles.diagnosticoContainer}>
        {/* Voltagem Bateria */}
        <View style={styles.diagnosticoItem}>
          <Text style={styles.label}>
            Voltagem da Bateria
          </Text>
          <Text style={styles.detail}>{viagem.voltagemBateriaInicio} volts</Text>
        </View>

        {/* Encerramento da viagem */}
        <View style={styles.diagnosticoItem}>
          <Text style={styles.label}>
          </Text>
          <Text style={styles.detail}>{viagem.voltagemBateriaEncerramento} volts</Text>
        </View>
      </View>

      <View style={styles.diagnosticoContainer}>
        {/* Status da Transmissão */}
        <View style={styles.diagnosticoItem}>
          <Text style={styles.label}>
            Status da Transmissão
          </Text>
          <Text style={styles.detail}>{viagem.statusTransmissaoInicio}</Text>
        </View>

        {/* Encerramento da viagem */}
        <View style={styles.diagnosticoItem}>
          <Text style={styles.label}>
          </Text>
          <Text style={styles.detail}>{viagem.statusTransmissaoEncerramento}</Text>
        </View>
      </View>

      <View style={styles.diagnosticoContainer}>
        {/* Monitor de Emissão */}
        <View style={styles.diagnosticoItem}>
          <Text style={styles.label}>
            Monitor de Emissão
          </Text>
          <Text style={styles.detail}>{viagem.statusMonitoresEmissaoInicio}</Text>
        </View>

        {/* Encerramento da viagem */}
        <View style={styles.diagnosticoItem}>
          <Text style={styles.label}>
          </Text>
          <Text style={styles.detail}>{viagem.statusMonitoresEmissaoEncerramento}</Text>
        </View>
      </View>

      <View style={styles.diagnosticoContainer}>
        {/* Controle de Emissão */}
        <View style={styles.diagnosticoItem}>
          <Text style={styles.label}>
            Controle de Emissão
          </Text>
          <Text style={styles.detail}>{viagem.statusControleEmissaoInicio}</Text>
        </View>

        {/* Encerramento da viagem */}
        <View style={styles.diagnosticoItem}>
          <Text style={styles.label}>
          </Text>
          <Text style={styles.detail}>{viagem.statusControleEmissaoEncerramento}</Text>
        </View>
      </View>

      <View style={styles.diagnosticoContainer}>
        {/* Monitor do Catalisador */}
        <View style={styles.diagnosticoItem}>
          <Text style={styles.label}>
            Monitor do Catalisador
          </Text>
          <Text style={styles.detail}>{viagem.monitorCatalisadorInicio}</Text>
        </View>

        {/* Encerramento da viagem */}
        <View style={styles.diagnosticoItem}>
          <Text style={styles.label}>
          </Text>
          <Text style={styles.detail}>{viagem.monitorCatalisadorEncerramento}</Text>
        </View>
      </View>

      <View style={styles.diagnosticoContainer}>
        {/* Monitor do Sensor */}
        <View style={styles.diagnosticoItem}>
          <Text style={styles.label}>
            Monitor do Sensor
          </Text>
          <Text style={styles.detail}>{viagem.monitorSensor02Inicio}</Text>
        </View>

        {/* Encerramento da viagem */}
        <View style={styles.diagnosticoItem}>
          <Text style={styles.label}>
          </Text>
          <Text style={styles.detail}>{viagem.monitorSensor02Encerramento}</Text>
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
