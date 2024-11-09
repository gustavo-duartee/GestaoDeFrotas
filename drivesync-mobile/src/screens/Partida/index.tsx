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
  const [observacoes, setObservacoes] = useState("");
  const [obdData, setObdData] = useState({
    velocidade: '',
    rpm: '',
    temperatura: '',
    nivelCombustivel: '',
    statusControleEmissao: '',
    monitorCatalisador: '',
    monitorSensor02: '',
    temperaturaSensor02: '',
    temperaturaTransmissao: '',
    statusTransmissao: '',
    codigoFalha: '',
    statusMonitoresEmissao: '',
    voltagemBateria: '',
    dataHoraDiagnostico: '',
    nivelCombustivelInicio: 0,
    statusControleEmissaoInicio: true,
    monitorCatalisadorInicio: true,
    monitorSensor02Inicio: true,
    temperaturaSensor02Inicio: 0,
    temperaturaTransmissaoInicio: 0,
    statusTransmissaoInicio: 'string',
    codigoFalhaInicio: 'string',
    statusMonitoresEmissaoInicio: true,
    voltagemBateriaInicio: 0
  });

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
        veiculoId: selectedVeiculo,
        localizacao: locationText,
        checklist: {
          id: 1, // ID do checklist, ajuste conforme necessário
          ...checkList
        },
        observacoes: observacoes,
        // Dados do OBD (novo)
        obdData: {
          velocidade: obdData.velocidade,
          rpm: obdData.rpm,
          temperatura: obdData.temperatura,
          nivelCombustivelInicio: obdData.nivelCombustivelInicio,
          statusControleEmissaoInicio: obdData.statusControleEmissaoInicio,
          monitorCatalisadorInicio: obdData.monitorCatalisadorInicio,
          monitorSensor02Inicio: obdData.monitorSensor02Inicio,
          temperaturaSensor02Inicio: obdData.temperaturaSensor02Inicio,
          temperaturaTransmissaoInicio: obdData.temperaturaTransmissaoInicio,
          statusTransmissaoInicio: obdData.statusTransmissaoInicio,
          codigoFalhaInicio: obdData.codigoFalhaInicio,
          statusMonitoresEmissaoInicio: obdData.statusMonitoresEmissaoInicio,
          voltagemBateriaInicio: obdData.voltagemBateriaInicio
        }
      });

      if (response.status === 201) {
        Alert.alert('Sucesso', 'Viagem iniciada com sucesso!');
        navigation.navigate('Início');
      } else {
        Alert.alert('Erro', 'Erro ao iniciar a viagem.');
      }
    } catch (error) {
      console.error('Erro ao iniciar a viagem:', error);

      if (error.response && error.response.status === 400) {
        Alert.alert('Viagem em Andamento', 'O motorista já possui uma viagem em andamento.');
      } else {
        Alert.alert('Erro', `Não foi possível iniciar a viagem: ${error.message}`);
      }
    }
  };

  // Função para preencher os campos automaticamente com dados simulados
  const handleExtrairDados = () => {
    setObdData({
      velocidade: '80',
      rpm: '3000',
      temperatura: '85',
      nivelCombustivel: '70',
      statusControleEmissao: 'Ativo',
      monitorCatalisador: 'Ok',
      monitorSensor02: 'Ok',
      temperaturaSensor02: '90',
      temperaturaTransmissao: '75',
      statusTransmissao: 'Funcionando',
      codigoFalha: 'P0100',
      statusMonitoresEmissao: 'Pronto',
      voltagemBateria: '12.6',
      dataHoraDiagnostico: new Date().toISOString(),
      nivelCombustivelInicio: 80,
      statusControleEmissaoInicio: true,
      monitorCatalisadorInicio: true,
      monitorSensor02Inicio: true,
      temperaturaSensor02Inicio: 90,
      temperaturaTransmissaoInicio: 75,
      statusTransmissaoInicio: 'Funcionando',
      codigoFalhaInicio: 'P0100',
      statusMonitoresEmissaoInicio: true,
      voltagemBateriaInicio: 12.6
    });
  };

  // Função para limpar os campos
  const handleLimparCampos = () => {
    setObdData({
      velocidade: '',
      rpm: '',
      temperatura: '',
      nivelCombustivel: '',
      statusControleEmissao: '',
      monitorCatalisador: '',
      monitorSensor02: '',
      temperaturaSensor02: '',
      temperaturaTransmissao: '',
      statusTransmissao: '',
      codigoFalha: '',
      statusMonitoresEmissao: '',
      voltagemBateria: '',
      dataHoraDiagnostico: '',
      nivelCombustivelInicio: 0,
      statusControleEmissaoInicio: true,
      monitorCatalisadorInicio: true,
      monitorSensor02Inicio: true,
      temperaturaSensor02Inicio: 0,
      temperaturaTransmissaoInicio: 0,
      statusTransmissaoInicio: 'string',
      codigoFalhaInicio: 'string',
      statusMonitoresEmissaoInicio: true,
      voltagemBateriaInicio: 0
    });
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
        <Text style={styles.label}>Velocidade</Text>
        <TextInput
          style={styles.input}
          placeholder="Velocidade"
          value={obdData.velocidade}
          onChangeText={(text) => setObdData({...obdData, velocidade: text})}
        />
        
        <Text style={styles.label}>RPM</Text>
        <TextInput
          style={styles.input}
          placeholder="RPM"
          value={obdData.rpm}
          onChangeText={(text) => setObdData({...obdData, rpm: text})}
        />
        
        <Text style={styles.label}>Temperatura</Text>
        <TextInput
          style={styles.input}
          placeholder="Temperatura"
          value={obdData.temperatura}
          onChangeText={(text) => setObdData({...obdData, temperatura: text})}
        />

        {/* Adicionando os novos campos conforme solicitado */}
        <Text style={styles.label}>Nível de Combustível</Text>
        <TextInput
          style={styles.input}
          placeholder="Nível de Combustível"
          value={obdData.nivelCombustivelInicio.toString()}
          onChangeText={(text) => setObdData({...obdData, nivelCombustivelInicio: parseFloat(text)})}
        />

        <Text style={styles.label}>Status Controle Emissão</Text>
        <TextInput
          style={styles.input}
          placeholder="Status Controle Emissão"
          value={obdData.statusControleEmissaoInicio.toString()}
          onChangeText={(text) => setObdData({...obdData, statusControleEmissaoInicio: text === 'true'})}
        />

        <Text style={styles.label}>Monitor Catalisador</Text>
        <TextInput
          style={styles.input}
          placeholder="Monitor Catalisador"
          value={obdData.monitorCatalisadorInicio.toString()}
          onChangeText={(text) => setObdData({...obdData, monitorCatalisadorInicio: text === 'true'})}
        />

        <Text style={styles.label}>Monitor Sensor 02</Text>
        <TextInput
          style={styles.input}
          placeholder="Monitor Sensor 02"
          value={obdData.monitorSensor02Inicio.toString()}
          onChangeText={(text) => setObdData({...obdData, monitorSensor02Inicio: text === 'true'})}
        />

        <Text style={styles.label}>Temperatura Sensor 02</Text>
        <TextInput
          style={styles.input}
          placeholder="Temperatura Sensor 02"
          value={obdData.temperaturaSensor02Inicio.toString()}
          onChangeText={(text) => setObdData({...obdData, temperaturaSensor02Inicio: parseFloat(text)})}
        />

        <Text style={styles.label}>Temperatura Transmissão</Text>
        <TextInput
          style={styles.input}
          placeholder="Temperatura Transmissão"
          value={obdData.temperaturaTransmissaoInicio.toString()}
          onChangeText={(text) => setObdData({...obdData, temperaturaTransmissaoInicio: parseFloat(text)})}
        />

        <Text style={styles.label}>Status Transmissão</Text>
        <TextInput
          style={styles.input}
          placeholder="Status Transmissão"
          value={obdData.statusTransmissaoInicio}
          onChangeText={(text) => setObdData({...obdData, statusTransmissaoInicio: text})}
        />

        <Text style={styles.label}>Código Falha</Text>
        <TextInput
          style={styles.input}
          placeholder="Código Falha"
          value={obdData.codigoFalhaInicio}
          onChangeText={(text) => setObdData({...obdData, codigoFalhaInicio: text})}
        />

        <Text style={styles.label}>Status Monitores Emissão</Text>
        <TextInput
          style={styles.input}
          placeholder="Status Monitores Emissão"
          value={obdData.statusMonitoresEmissaoInicio.toString()}
          onChangeText={(text) => setObdData({...obdData, statusMonitoresEmissaoInicio: text === 'true'})}
        />

        <Text style={styles.label}>Voltagem Bateria</Text>
        <TextInput
          style={styles.input}
          placeholder="Voltagem Bateria"
          value={obdData.voltagemBateriaInicio.toString()}
          onChangeText={(text) => setObdData({...obdData, voltagemBateriaInicio: parseFloat(text)})}
        />
      </View>

      <Text style={styles.subtitle}>Checklist de segurança</Text>
      <View style={styles.checklistContainer}>
        {Object.keys(checkList).map((item, index) => (
          <View key={index} style={styles.checkItem}>
            <CheckBox
              isChecked={checkList[item]}
              onClick={() => handleCheckBoxChange(item)}
              rightText={item}
            />
          </View>
        ))}
      </View>

      <Text style={styles.subtitle}>Observações</Text>
      <TextInput
        style={styles.input}
        placeholder="Observações"
        value={observacoes}
        onChangeText={setObservacoes}
        multiline
      />

      <View style={styles.buttonContainer}>
        <TouchableOpacity onPress={handleExtrairDados} style={styles.button}>
          <Text style={styles.buttonText}>Extrair dados OBD</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={handleIniciarViagem} style={styles.button}>
          <Text style={styles.buttonText}>Iniciar Viagem</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
}
