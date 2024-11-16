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
    Freios: false,
    Pneus: false,
    Luzes: false,
    Combustivel: false,
    Equipamentos: false,
    Estepe: false,
    Extintor: false
  });

  const [veiculos, setVeiculos] = useState([]);
  const [selectedVeiculo, setSelectedVeiculo] = useState("");
  const [location, setLocation] = useState(null);
  const [locationText, setLocationText] = useState("Obtendo localização...");
  const [observacoes, setObservacoes] = useState("");
  const [obdData, setObdData] = useState({
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

    if (!selectedVeiculo) {
      Alert.alert('Seleção de Veículo', 'Por favor, selecione um veículo.');
      return;
    }

    if (!location) {
      Alert.alert('Localização', 'Aguarde enquanto obtemos sua localização.');
      return;
    }

try {
  // Envia a requisição para iniciar a viagem
  const response = await api.post('/api/Viagens', {
    motoristaId: "ef0d9d78-1737-424d-8743-f3043e83c34f", // ID do motorista
    veiculoId: selectedVeiculo,
    localizacao: locationText,
    checklist: checkListData,
    observacoes: observacoes,
    obdData: obdDataPayload
  });

  if (response.status === 201) {
    Alert.alert('Sucesso', 'Viagem iniciada com sucesso!');
    navigation.navigate('Início'); // Redireciona para a tela de início após sucesso
  } else {
    Alert.alert('Erro', 'Erro ao iniciar a viagem.');
  }
} catch (error) {
  console.error('Erro ao iniciar a viagem:', error);

  // Tratamento específico para erro 400 (viagem em andamento)
  if (error.response && error.response.status === 400) {
    console.error('Erro 400:', error.response.data); // Log dos detalhes do erro
    Alert.alert('Viagem em Andamento', 'O motorista já possui uma viagem em andamento. Por favor, encerre a viagem atual antes de iniciar uma nova.');
  } else {
    Alert.alert('Erro', `Não foi possível iniciar a viagem: ${error.message}`);
  }
}


  // Função para preencher os campos automaticamente com dados simulados
  const handleExtrairDados = () => {
    setObdData({
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
      <Text style={styles.subtitle}>Ponto de partida</Text>

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

      <Text style={styles.subtitle}>Checklist de segurança</Text>

      <View style={styles.checkListContainer}>
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

      <Text style={styles.subtitle}>Dados do Veículo (OBD)</Text>
      <View style={styles.inputsContainer}>

        {/* Mensagem explicativa para o usuário */}
        <Text style={styles.testMessage}>
          Esta é uma versão de teste. Para simular a extração dos dados, clique no botão 'Extrair'.
        </Text>

        <View style={styles.buttonContainer}>
          <TouchableOpacity onPress={handleExtrairDados} style={styles.button}>
            <Text style={styles.buttonText}>Extrair dados OBD</Text>
          </TouchableOpacity>

          <TouchableOpacity onPress={handleLimparCampos} style={styles.button}>
            <Text style={styles.buttonText}>Limpar Dados</Text>
          </TouchableOpacity>
        </View>

        {/* Adicionando os novos campos conforme solicitado */}
        <Text style={styles.label}>Nível de Combustível</Text>
        <TextInput
          style={styles.input}
          placeholder="Nível de Combustível"
          value={obdData.nivelCombustivelInicio.toString()}
          onChangeText={(text) => setObdData({ ...obdData, nivelCombustivelInicio: parseFloat(text) })}
        />

        <Text style={styles.label}>Status Controle Emissão</Text>
        <TextInput
          style={styles.input}
          placeholder="Status Controle Emissão"
          value={obdData.statusControleEmissaoInicio.toString()}
          onChangeText={(text) => setObdData({ ...obdData, statusControleEmissaoInicio: text === 'true' })}
        />

        <Text style={styles.label}>Monitor Catalisador</Text>
        <TextInput
          style={styles.input}
          placeholder="Monitor Catalisador"
          value={obdData.monitorCatalisadorInicio.toString()}
          onChangeText={(text) => setObdData({ ...obdData, monitorCatalisadorInicio: text === 'true' })}
        />

        <Text style={styles.label}>Monitor Sensor 02</Text>
        <TextInput
          style={styles.input}
          placeholder="Monitor Sensor 02"
          value={obdData.monitorSensor02Inicio.toString()}
          onChangeText={(text) => setObdData({ ...obdData, monitorSensor02Inicio: text === 'true' })}
        />

        <Text style={styles.label}>Temperatura Sensor 02</Text>
        <TextInput
          style={styles.input}
          placeholder="Temperatura Sensor 02"
          value={obdData.temperaturaSensor02Inicio.toString()}
          onChangeText={(text) => setObdData({ ...obdData, temperaturaSensor02Inicio: parseFloat(text) })}
        />

        <Text style={styles.label}>Temperatura Transmissão</Text>
        <TextInput
          style={styles.input}
          placeholder="Temperatura Transmissão"
          value={obdData.temperaturaTransmissaoInicio.toString()}
          onChangeText={(text) => setObdData({ ...obdData, temperaturaTransmissaoInicio: parseFloat(text) })}
        />

        <Text style={styles.label}>Status Transmissão</Text>
        <TextInput
          style={styles.input}
          placeholder="Status Transmissão"
          value={obdData.statusTransmissaoInicio}
          onChangeText={(text) => setObdData({ ...obdData, statusTransmissaoInicio: text })}
        />

        <Text style={styles.label}>Código Falha</Text>
        <TextInput
          style={styles.input}
          placeholder="Código Falha"
          value={obdData.codigoFalhaInicio}
          onChangeText={(text) => setObdData({ ...obdData, codigoFalhaInicio: text })}
        />

        <Text style={styles.label}>Status Monitores Emissão</Text>
        <TextInput
          style={styles.input}
          placeholder="Status Monitores Emissão"
          value={obdData.statusMonitoresEmissaoInicio.toString()}
          onChangeText={(text) => setObdData({ ...obdData, statusMonitoresEmissaoInicio: text === 'true' })}
        />

        <Text style={styles.label}>Voltagem Bateria</Text>
        <TextInput
          style={styles.input}
          placeholder="Voltagem Bateria"
          value={obdData.voltagemBateriaInicio.toString()}
          onChangeText={(text) => setObdData({ ...obdData, voltagemBateriaInicio: parseFloat(text) })}
        />
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

        <TouchableOpacity onPress={handleIniciarViagem} style={styles.button}>
          <Text style={styles.buttonText}>Iniciar Viagem</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
}
}
