import React, { useState, useEffect } from "react";
import { View, Text, TextInput, ScrollView, TouchableOpacity, Alert } from "react-native";
import CheckBox from 'react-native-check-box';
import { Picker } from '@react-native-picker/picker';
import * as Location from 'expo-location';
import styles from './styles';
import api from '../../services/api';
import MapScreen from '../../components/Map';

export default function NovaViagem({ navigation }) {
  const [checkList, setCheckList] = useState({
    freios: false,
    pneus: false,
    luzes: false,
    combustivel: false,
    equipamentos: false,
    estepe: false,
    extintor: false
  });

  const [veiculos, setVeiculos] = useState([]);
  const [selectedVeiculo, setSelectedVeiculo] = useState("");
  const [location, setLocation] = useState(null);
  const [locationText, setLocationText] = useState("Obtendo localização...");
  const [observacoes, setObservacoes] = useState(""); // Adicionando estado para observações

  useEffect(() => {
    async function fetchVeiculos() {
      try {
        const response = await api.get('/api/Veiculos');
        const veiculosDisponiveis = response.data.filter(veiculo => veiculo.status === "Disponível");
        setVeiculos(veiculosDisponiveis);
      } catch (error) {
        console.error(error);
      }
    }

    fetchVeiculos();

    (async () => {
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== 'granted') {
        Alert.alert('Permissão negada', 'Precisamos da permissão para acessar sua localização.');
        return;
      }

      let location = await Location.getCurrentPositionAsync({});
      setLocation(location);
      setLocationText(`${location.coords.latitude}, ${location.coords.longitude}`);
    })();
  }, []);

  const handleCheckBoxChange = (item) => {
    setCheckList({ ...checkList, [item]: !checkList[item] });
  };

  const handleIniciarViagem = async () => {
    // Validar se todos os itens do checklist foram preenchidos
    const checklistCompleto = Object.values(checkList).every(Boolean);
    if (!checklistCompleto) {
      Alert.alert('Checklist Incompleto', 'Por favor, complete todos os itens de segurança.');
      return;
    }
  
    if (!location) {
      Alert.alert('Localização', 'Aguarde enquanto obtemos sua localização.');
      return;
    }
  
    try {
      const response = await api.post('/api/Viagens', {
        motoristaId: "2caf49d5-0560-4c21-83f9-73c7a0a5ddf5", // ID do motorista; adapte conforme necessário
        veiculoId: 1029,
        localizacao: locationText,
        checklist: {
          id: 1, // ID do checklist, ajuste conforme necessário
          ...checkList
        },
        observacoes: observacoes, // Adicionando observações
      });
  
      if (response.status === 201) {
        Alert.alert('Sucesso', 'Viagem iniciada com sucesso!');
        navigation.navigate('Início');
      } else {
        Alert.alert('Erro', 'Erro ao iniciar a viagem.');
      }
    } catch (error) {
      console.error('Erro ao iniciar a viagem:', error);
      
      // Verificar se o erro é devido a uma viagem em andamento
      if (error.response && error.response.status === 400) {
        Alert.alert('Viagem em Andamento', 'O motorista já possui uma viagem em andamento.');
      } else {
        Alert.alert('Erro', `Não foi possível iniciar a viagem: ${error.message}`);
      }
    }
  };
  

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.subtitle}>Sua localização</Text>

      <View style={styles.locationContainer}>
        <TextInput
          style={styles.input}
          placeholder="Localização atual"
          placeholderTextColor="#aaa"
          value={locationText}
          editable={false}
        />
        <MapScreen location={location} />
      </View>

      <Text style={styles.subtitle}>Selecione um veículo</Text>

      <View style={styles.inputsContainer}>
        <View style={styles.pickerContainer}>
          <Picker
            selectedValue={selectedVeiculo}
            onValueChange={(itemValue) => setSelectedVeiculo(itemValue)}
            style={styles.picker}
            dropdownIconColor="#aaa"
          >
            <Picker.Item label="Selecione um veículo" value="" />
            {veiculos.map(veiculo => (
              <Picker.Item key={veiculo.id} label={`${veiculo.marca} - ${veiculo.modelo}`} value={veiculo.id} />
            ))}
          </Picker>
        </View>
      </View>

      <Text style={styles.subtitle}>Dados do Veículo (OBD)</Text>
      <View style={styles.inputsContainer}>
        <Text style={styles.input}>Velocidade: {/*{obdData.velocidade}*/}</Text>
        <Text style={styles.input}>RPM: {/*{obdData.rpm}*/}</Text>
        <Text style={styles.input}>Temperatura: {/*{obdData.temperatura}*/}</Text>
        <Text style={styles.input}>Nível de Combustível: {/*{obdData.nivelCombustivel}*/}</Text>
      </View>

      <Text style={styles.subtitle}>Segurança</Text>
      <View style={styles.checkListContainer}>
        {/* Aqui estão os checkboxes do checklist */}
        {Object.keys(checkList).map((item) => (
          <View key={item} style={styles.checkListItem}>
            <Text style={[
              styles.checkListText,
              checkList[item] && { textDecorationLine: 'line-through' }
            ]}>
              {item.charAt(0).toUpperCase() + item.slice(1)}
            </Text>
            <CheckBox
              style={styles.checkBox}
              checkBoxColor='#00875F'
              isChecked={checkList[item]}
              onClick={() => handleCheckBoxChange(item)}
            />
          </View>
        ))}
      </View>

      <Text style={styles.subtitle}>Observações</Text>
      <TextInput
        editable
        multiline
        numberOfLines={4}
        maxLength={100} // Aumentei o limite de caracteres
        style={styles.obsInput}
        placeholder="Digite suas observações aqui"
        placeholderTextColor="#aaa"
        onChangeText={setObservacoes} // Atualizando o estado das observações
      />

      <TouchableOpacity style={styles.button} onPress={handleIniciarViagem}>
        <Text style={styles.buttonText}>Iniciar</Text>
      </TouchableOpacity>
    </ScrollView>
  );
}
