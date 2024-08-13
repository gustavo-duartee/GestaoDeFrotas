import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, TouchableOpacity } from 'react-native';
import { useForegroundPermissions, watchPositionAsync, LocationAccuracy, LocationSubscription } from 'expo-location';  

import api from '../../services/api';
import styles from './styles';
import { getAddressLocation } from '../../utils/getAddressLocation';

import { Loading } from '../../components/Loading';
import { LocationInfo } from '../../components/LocationInfo';

const IniciarViagem = () => {
  const [localInicio, setLocalInicio] = useState('');
  const [motoristaId, setMotoristaId] = useState('');
  const [veiculoId, setVeiculoId] = useState('');
  const [isLoadingLocation, setIsLoadingLocation] = useState(true);
  const [currentAddress, setCurrentAddress] = useState<string | null>(null);

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
      getAddressLocation(location.coords)
        .then((address) => {
          if (address) {
            setCurrentAddress(address);
          }
        })
        .finally(() => setIsLoadingLocation(false))
    })
      .then((response) => subscription = response);

    return () => {
      if (subscription) {
        subscription.remove();
      }
    };
  }, [locationForegroundPermission]);

  if (!locationForegroundPermission?.granted) {
    return;
  }

  if (isLoadingLocation) {
    <Loading />
  }



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
        {
          currentAddress &&
          <LocationInfo
            label='Localizacao Atual'
            description={currentAddress}
          />
        }
      </View>

      <TouchableOpacity style={styles.planButton} onPress={iniciarViagem}>
        <Text style={styles.planButtonText}>Iniciar Viagem</Text>
      </TouchableOpacity>
    </View>
  );
};

export default IniciarViagem;
