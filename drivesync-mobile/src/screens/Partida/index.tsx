import React, { useState, useEffect } from "react";
import { View, Text, TextInput, ScrollView, TouchableOpacity, Alert } from "react-native";
import CheckBox from 'react-native-check-box';
import { Picker } from '@react-native-picker/picker';
import * as Location from 'expo-location';
import styles from './styles';
import api from '../../services/api';
import MapScreen from '../../components/Map';
import { useAuth } from "../../contexts/auth";

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
  const { user, signOut } = useAuth();
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
    const fetchVeiculos = async () => {
      try {
        const response = await api.get('/api/Veiculos');
        const veiculosDisponiveis = response.data.filter(veiculo => veiculo.status === "Disponível");
        setVeiculos(veiculosDisponiveis);
      } catch (error) {
        console.error("Erro ao buscar veículos:", error);
      }
    };

    const fetchLocation = async () => {
      const { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== 'granted') {
        Alert.alert('Permissão negada', 'Precisamos da permissão para acessar sua localização.');
        return;
      }

      const location = await Location.getCurrentPositionAsync({
        accuracy: Location.Accuracy.High, // Ajuste a precisão se necessário
      });

      // Realiza a reversão das coordenadas para um nome de local
      const address = await Location.reverseGeocodeAsync({
        latitude: location.coords.latitude,
        longitude: location.coords.longitude,
      });

      // Verifica se a reversão foi bem-sucedida e define o texto da localização
      if (address && address.length > 0) {
        const { district, subregion, region, street } = address[0];
        setLocation(location);

        // Pega todas as letras maiúsculas da string da região
        const regionAbbreviation = region
          ? region
            .match(/[A-Z]/g) // Encontra todas as letras maiúsculas
            .join('') // Junta as letras em uma string
          : 'RG'; // Valor padrão se region não existir

        setLocationText(`${street ? street : 'Rua desconhecida'}, ${subregion ? subregion : 'Cidade desconhecida'}, ${regionAbbreviation}`);
      } else {
        setLocationText('Localização desconhecida');
      }
    };

    fetchVeiculos();
    fetchLocation();
  }, []);

  const handleCheckBoxChange = (item) => {
    setCheckList(prevState => ({ ...prevState, [item]: !prevState[item] }));
  };

  const handleIniciarViagem = async () => {
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
      // Suponha que você tenha uma função para obter o e-mail do usuário logado.
      const emailUsuario = user?.email; // Substitua isso com a lógica que obtém o e-mail do usuário

      // Chama o endpoint para obter o motoristaId usando o e-mail do usuário
      const responseEmail = await api.get(`/api/Account/GetUserByEmail/${emailUsuario}`);

      if (responseEmail.status === 200 && responseEmail.data) {
        const motoristaId = responseEmail.data.id; // Suponha que o ID esteja na propriedade 'id' da resposta

        const response = await api.post('/api/Viagens', {
          motoristaId: motoristaId,  // Agora o motoristaId é obtido dinamicamente
          veiculoId: selectedVeiculo,
          localizacaoInicio: locationText,
          checklist: checkList,
          observacoesInicio: observacoes,
          nivelCombustivelInicio: obdData.nivelCombustivelInicio,
          statusControleEmissaoInicio: obdData.statusControleEmissaoInicio,
          monitorCatalisadorInicio: obdData.monitorCatalisadorInicio,
          monitorSensor02Inicio: obdData.monitorSensor02Inicio,
          temperaturaSensor02Inicio: obdData.temperaturaSensor02Inicio,
          temperaturaTransmissaoInicio: obdData.temperaturaTransmissaoInicio,
          statusTransmissaoInicio: obdData.statusTransmissaoInicio,
          codigoFalhaInicio: obdData.codigoFalhaInicio,
          statusMonitoresEmissaoInicio: obdData.statusMonitoresEmissaoInicio,
          voltagemBateriaInicio: obdData.voltagemBateriaInicio,
          dataInicio: new Date().toISOString()
        });

        if (response.status === 201) {
          Alert.alert('Sucesso', 'Viagem iniciada com sucesso!');
          navigation.navigate('Home');
        } else {
          Alert.alert('Erro', 'Erro ao iniciar a viagem.');
        }
      } else {
        Alert.alert('Erro', 'Não foi possível obter o ID do motorista.');
      }
    } catch (error) {
      console.log('Erro desconhecido ao iniciar viagem:', error);
      Alert.alert('Erro', `Não foi possível iniciar a viagem: ${error.message}`);
    }
  };





  const handleExtrairDados = () => {
    setObdData({
      nivelCombustivelInicio: 65, // Percentual do tanque de combustível
      statusControleEmissaoInicio: true, // Controle de emissões funcionando corretamente
      monitorCatalisadorInicio: true, // Catalisador está sendo monitorado
      monitorSensor02Inicio: true, // Sensores O2 estão ativos e sendo monitorados
      temperaturaSensor02Inicio: 85, // Temperatura do sensor de oxigênio em graus Celsius
      temperaturaTransmissaoInicio: 70, // Temperatura da transmissão em graus Celsius
      statusTransmissaoInicio: 'Normal', // Status geral da transmissão
      codigoFalhaInicio: 'P0133', // Código de falha simulado indicando resposta lenta do sensor O2 (exemplo comum)
      statusMonitoresEmissaoInicio: true, // Todos os monitores de emissão ativos
      voltagemBateriaInicio: 12.6 // Tensão da bateria do veículo em volts
    });

  };

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
      <Picker
        selectedValue={selectedVeiculo}
        onValueChange={setSelectedVeiculo}
        style={styles.picker}
        dropdownIconColor="#aaa"
      >
        <Picker.Item label="Selecione um veículo" value="" />
        {veiculos.map(veiculo => (
          <Picker.Item key={veiculo.id} label={`${veiculo.marca} - ${veiculo.modelo} - ${veiculo.placa}`} value={veiculo.id} />
        ))}
      </Picker>

      <Text style={styles.subtitle}>Checklist de segurança</Text>
      {Object.keys(checkList).map((item, index) => (
        <View key={index} style={styles.checkItem}>
          <CheckBox
            isChecked={checkList[item]}
            onClick={() => handleCheckBoxChange(item)}
            rightText={item}
          />
        </View>
      ))}

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
        <Text style={styles.label}>Nível de Combustível (%)</Text>
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

      <View style={styles.buttonContainerSend}>
        <TouchableOpacity onPress={handleIniciarViagem} style={styles.buttonSend}>
          <Text style={styles.buttonTextSend}>Iniciar Viagem</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
}
