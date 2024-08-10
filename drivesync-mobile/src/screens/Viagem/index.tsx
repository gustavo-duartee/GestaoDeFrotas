import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, TouchableOpacity } from 'react-native';
import api from '../../services/api';

import styles, { Message } from './styles'; // Certifique-se de que 'Message' está sendo exportado corretamente

import { useForegroundPermissions, watchPositionAsync, LocationAccuracy, LocationSubscription } from 'expo-location';

const IniciarViagem = () => {
  const [localInicio, setLocalInicio] = useState('');
  const [motoristaId, setMotoristaId] = useState('');
  const [veiculoId, setVeiculoId] = useState('');

  const [locationForegroundPermission, requestLocationForegroundPermission] = useForegroundPermissions();

  const iniciarViagem = async () => {
    try {
      const response = await api.post('/viagem', {
        localInicio,
        motoristaId,
        veiculoId,
        dataInicio: new Date(),
        ativa: true
      });
      console.log('Viagem iniciada:', response.data);
    } catch (error) {
      console.error('Erro ao iniciar a viagem:', error);
    }
  };

  useEffect(() => {
    requestLocationForegroundPermission();
  }, []);

  useEffect(() => {
    if (!locationForegroundPermission?.granted) {
      return;
    }

    let subscription: LocationSubscription;

    watchPositionAsync({
      accuracy: LocationAccuracy.High,
      timeInterval: 1000
    }, (location) => {
      console.log(location);
    })
      .then((response) => subscription = response);

    return () => subscription.remove();
  }, [locationForegroundPermission]);



  return (
    <View style={styles.container}>
      <View style={styles.inputsContainer}>
        <TextInput
          placeholder="ID do Motorista"
          value={motoristaId}
          onChangeText={text => setMotoristaId(text)}
          style={styles.input}
          placeholderTextColor="#7C7C8A"
        />
        <TextInput
          placeholder="ID do Veículo"
          value={veiculoId}
          onChangeText={text => setVeiculoId(text)}
          style={styles.input}
          placeholderTextColor="#7C7C8A"
        />
        <TextInput
          placeholder="Local de Início"
          value={localInicio}
          onChangeText={text => setLocalInicio(text)}
          editable={false}
          style={styles.input}
          placeholderTextColor="#7C7C8A"
        />
      </View>

      <TouchableOpacity style={styles.planButton} onPress={iniciarViagem}>
        <Text style={styles.planButtonText}>Iniciar Viagem</Text>
      </TouchableOpacity>
    </View>
  );
};

export default IniciarViagem;
