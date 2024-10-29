import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity, Alert, ScrollView } from 'react-native';
import styles from './styles';
import api from '../../services/api';

export default function EncerrarViagem() {
  const [viagemEmAndamento, setViagemEmAndamento] = useState(null);
  const [locationText, setLocationText] = useState("Obtendo localização...");

  useEffect(() => {
    async function verificarViagemEmAndamento() {
      try {
        const response = await api.get('/api/Viagens'); // Ajuste para o endpoint correto
        const viagem = response.data.find(v => v.status === 'Iniciada');
        if (viagem) {
          setViagemEmAndamento(viagem);
        } else {
          setViagemEmAndamento(null);
        }
      } catch (error) {
        console.error(error);
        Alert.alert('Erro', 'Não foi possível verificar a viagem em andamento.');
      }
    }

    verificarViagemEmAndamento();
  }, []);

  const encerrarViagem = async () => {
    if (!viagemEmAndamento) {
      Alert.alert('Nenhuma viagem em andamento', 'Não há viagem para encerrar.');
      return;
    }

    try {
      const response = await api.put(`/api/Viagens/${viagemEmAndamento.id}`, {
        status: 'Encerrada',
        dataFim: new Date().toISOString(),
        latitude: location.coords.latitude, // Capture localização atual
        longitude: location.coords.longitude,
      });

      if (response.status === 200) {
        Alert.alert('Sucesso', 'A viagem foi encerrada.');
        setViagemEmAndamento(null);
      } else {
        Alert.alert('Erro', 'Não foi possível encerrar a viagem.');
      }
    } catch (error) {
      console.error(error);
      Alert.alert('Erro', 'Houve um problema ao encerrar a viagem.');
    }
  };

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>Encerrar Viagem</Text>
      {viagemEmAndamento ? (
        <View style={styles.viagemInfoContainer}>
          <Text style={styles.subtitle}>Viagem em andamento:</Text>
          <Text style={styles.viagemInfoText}>Veículo: {viagemEmAndamento.veiculo.marca} - {viagemEmAndamento.veiculo.modelo}</Text>
          <Text style={styles.viagemInfoText}>Data de início: {new Date(viagemEmAndamento.dataInicio).toLocaleString()}</Text>
          <Text style={styles.viagemInfoText}>Status: {viagemEmAndamento.status}</Text>
          <TouchableOpacity style={styles.button} onPress={encerrarViagem}>
            <Text style={styles.buttonText}>Encerrar Viagem</Text>
          </TouchableOpacity>
        </View>
      ) : (
        <Text style={styles.noViagemText}>Nenhuma viagem em andamento.</Text>
      )}
    </ScrollView>
  );
}
