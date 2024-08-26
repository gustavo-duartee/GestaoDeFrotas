import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, TouchableOpacity, ScrollView } from 'react-native';
import { useForegroundPermissions, watchPositionAsync, LocationAccuracy, LocationSubscription, LocationObjectCoords } from 'expo-location';
import { Car } from 'phosphor-react-native';
import { Picker } from '@react-native-picker/picker'; // Importação correta

import api from '../../services/api';
import styles from './styles';
import { getAddressLocation } from '../../utils/getAddressLocation';

import { Loading } from '../../components/Loading';
import { LocationInfo } from '../../components/LocationInfo';
import { Map } from '../../components/Map';

const IniciarViagem = () => {
  const [localInicio, setLocalInicio] = useState('');
  const [motoristaId, setMotoristaId] = useState('');
  const [veiculoId, setVeiculoId] = useState('');
  const [isLoadingLocation, setIsLoadingLocation] = useState(true);
  const [currentAddress, setCurrentAddress] = useState<string | null>(null);
  const [currentCoords, setCurrentCoords] = useState<LocationObjectCoords | null>(null);

  const [manualCoords, setManualCoords] = useState<LocationObjectCoords | null>(null); // Coordenadas Manuais
  const [locationForegroundPermission, requestLocationForegroundPermission] = useForegroundPermissions();
  const [veiculosDisponiveis, setVeiculosDisponiveis] = useState([]);
  const [isLoadingVeiculos, setIsLoadingVeiculos] = useState(true);

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

    let subscription: LocationSubscription | undefined;

    const startWatching = async () => {
      subscription = await watchPositionAsync({
        accuracy: LocationAccuracy.High,
        timeInterval: 1000
      }, (location) => {
        setCurrentCoords(location.coords);

        getAddressLocation(location.coords)
          .then((address) => {
            if (address) {
              setCurrentAddress(address);
              setLocalInicio(address); // Atualiza o TextInput com o endereço atual
            }
          })
          .finally(() => setIsLoadingLocation(false));
      });
    };

    startWatching();

    return () => {
      if (subscription) {
        subscription.remove();
      }
    };
  }, [locationForegroundPermission]);

  useEffect(() => {
    const fetchVeiculos = async () => {
      try {
        const response = await api.get('api/Veiculos');
        console.log('Dados recebidos da API:', response.data); // Adicione isso para verificar os dados
        const veiculos = response.data.filter((veiculo) => veiculo.status === 'Disponível');
        setVeiculosDisponiveis(veiculos);
      } catch (error) {
        console.error('Erro ao buscar veículos:', error);
      } finally {
        setIsLoadingVeiculos(false);
      }
    };

    fetchVeiculos();
  }, []);

  if (!locationForegroundPermission?.granted) {
    return null;
  }

  if (isLoadingLocation || isLoadingVeiculos) {
    return <Loading />;
  }

  // Use coordenadas manuais se definidas, caso contrário, use coordenadas atuais
  const coordsToShow = manualCoords || currentCoords;

  return (
    <ScrollView style={styles.scrollView}>
      <View style={styles.container}>

        { coordsToShow && <Map coordinates={[coordsToShow]}/>}

        <View style={styles.inputsContainer}>
          <View style={styles.pickerContainer}>
            <Picker
              selectedValue={veiculoId}
              onValueChange={(itemValue) => setVeiculoId(itemValue)}
              style={styles.picker}
            >
              <Picker.Item label="Selecione um Veículo" value="" />
              {veiculosDisponiveis.length > 0 ? (
                veiculosDisponiveis.map((veiculo) => (
                  <Picker.Item 
                    key={veiculo.id}
                    label={veiculo.nome ? veiculo.nome : 'Nome não disponível'} // Mensagem padrão se nome estiver indefinido
                    value={veiculo.id ? veiculo.id.toString() : ''} // Converte id para string e adiciona valor padrão se id for indefinido
                  />
                ))
              ) : (
                <Picker.Item label="Nenhum veículo disponível" value="" />
              )}
            </Picker>
          </View>

          <TextInput
            placeholder="ID do Motorista"
            value={motoristaId}
            onChangeText={text => setMotoristaId(text)}
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
              icon={Car}
              label='Localização Atual'
              description={currentAddress}
            />
          }
        </View>

        <TouchableOpacity style={styles.button} onPress={() => setManualCoords({ latitude: -23.550520, longitude: -46.633308 })}>
          <Text style={styles.buttonText}>Definir Coordenadas Manuais</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.button} onPress={iniciarViagem}>
          <Text style={styles.buttonText}>Iniciar Viagem</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

export default IniciarViagem;
