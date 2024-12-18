import React, { useState, useEffect } from "react";
import { View, Text, TextInput, ScrollView, TouchableOpacity, Alert } from "react-native";
import * as Location from 'expo-location';
import styles from './styles';
import api from '../../services/api';
import MapScreen from '../../components/Map';

export default function EncerrarViagem({ route, navigation }) {
  const { viagem } = route.params;
  const [location, setLocation] = useState(null);
  const [locationText, setLocationText] = useState("Obtendo localização...");
  const [observacoes, setObservacoes] = useState("");
  const [encerramentoData, setEncerramentoData] = useState({
    nivelCombustivelEncerramento: 0,
    statusControleEmissaoEncerramento: true,
    monitorCatalisadorEncerramento: true,
    monitorSensor02Encerramento: true,
    temperaturaSensor02Encerramento: 0,
    temperaturaTransmissaoEncerramento: 0,
    statusTransmissaoEncerramento: 'string',
    codigoFalhaEncerramento: 'string',
    statusMonitoresEmissaoEncerramento: true,
    voltagemBateriaEncerramento: 0
  });

  useEffect(() => {
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

    fetchLocation();
  }, []);

  const handleEncerrarViagem = async () => {
    if (!location) {
      Alert.alert('Localização', 'Aguarde enquanto obtemos sua localização.');
      return;
    }

    try {
      const payload = {
        id: viagem.id,
        motoristaId: viagem.motoristaId,
        veiculoId: viagem.veiculoId,
        localizacaoEncerramento: locationText,
        observacoesEncerramento: observacoes,
        nivelCombustivelEncerramento: encerramentoData.nivelCombustivelEncerramento,
        statusControleEmissaoEncerramento: encerramentoData.statusControleEmissaoEncerramento,
        monitorCatalisadorEncerramento: encerramentoData.monitorCatalisadorEncerramento,
        monitorSensor02Encerramento: encerramentoData.monitorSensor02Encerramento,
        temperaturaSensor02Encerramento: encerramentoData.temperaturaSensor02Encerramento,
        temperaturaTransmissaoEncerramento: encerramentoData.temperaturaTransmissaoEncerramento,
        statusTransmissaoEncerramento: encerramentoData.statusTransmissaoEncerramento,
        codigoFalhaEncerramento: encerramentoData.codigoFalhaEncerramento,
        statusMonitoresEmissaoEncerramento: encerramentoData.statusMonitoresEmissaoEncerramento,
        voltagemBateriaEncerramento: encerramentoData.voltagemBateriaEncerramento,
      };

      const response = await api.put(`/api/Viagens/EncerrarViagem/${viagem.id}`, payload);

      if (response.status === 200) {
        Alert.alert('Sucesso', 'Viagem encerrada com sucesso!');
        navigation.navigate('Home');
      } else {
        console.error('Erro no servidor:', response);
        Alert.alert('Erro', `Erro ao encerrar a viagem: ${response.statusText || response.status}`);
      }
    } catch (error) {
      console.error('Erro ao encerrar a viagem:', error);
      Alert.alert('Erro', `Não foi possível encerrar a viagem: ${error.message}`);
    }
  };



  // Função para preencher os campos automaticamente com dados simulados
  const handleExtrairDados = () => {
    setEncerramentoData({
      nivelCombustivelEncerramento: 40, // Percentual do tanque após consumo durante a viagem
      statusControleEmissaoEncerramento: true, // Controle de emissões ainda operacional
      monitorCatalisadorEncerramento: true, // Catalisador continua sendo monitorado
      monitorSensor02Encerramento: true, // Sensores O2 ainda ativos e monitorados
      temperaturaSensor02Encerramento: 95, // Temperatura do sensor de oxigênio aumentou levemente
      temperaturaTransmissaoEncerramento: 85, // Temperatura da transmissão subiu devido ao uso
      statusTransmissaoEncerramento: 'Normal', // Transmissão ainda operando normalmente
      codigoFalhaEncerramento: 'Nenhum', // Sem códigos de falha no encerramento
      statusMonitoresEmissaoEncerramento: true, // Todos os monitores de emissão ainda ativos
      voltagemBateriaEncerramento: 12.4 // Tensão da bateria levemente reduzida devido ao uso do sistema elétrico
    });

  };

  const handleLimparCampos = () => {
    setEncerramentoData({
      nivelCombustivelEncerramento: 0,
      statusControleEmissaoEncerramento: true,
      monitorCatalisadorEncerramento: true,
      monitorSensor02Encerramento: true,
      temperaturaSensor02Encerramento: 0,
      temperaturaTransmissaoEncerramento: 0,
      statusTransmissaoEncerramento: 'string',
      codigoFalhaEncerramento: 'string',
      statusMonitoresEmissaoEncerramento: true,
      voltagemBateriaEncerramento: 0
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

      <Text style={styles.subtitle}>Dados do Veículo (OBD)</Text>
      <View style={styles.inputsContainer}>
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

        <Text style={styles.label}>Nível de Combustível (%)</Text>
        <TextInput
          style={styles.input}
          placeholder="Nível de Combustível"
          value={encerramentoData.nivelCombustivelEncerramento.toString()}
          onChangeText={(text) => setEncerramentoData({ ...encerramentoData, nivelCombustivelEncerramento: parseFloat(text) })}
        />

        <Text style={styles.label}>Status Controle Emissão</Text>
        <TextInput
          style={styles.input}
          placeholder="Status Controle Emissão"
          value={encerramentoData.statusControleEmissaoEncerramento.toString()}
          onChangeText={(text) => setEncerramentoData({ ...encerramentoData, statusControleEmissaoEncerramento: text === 'true' })}
        />

        <Text style={styles.label}>Monitor Catalisador</Text>
        <TextInput
          style={styles.input}
          placeholder="Monitor Catalisador"
          value={encerramentoData.monitorCatalisadorEncerramento.toString()}
          onChangeText={(text) => setEncerramentoData({ ...encerramentoData, monitorCatalisadorEncerramento: text === 'true' })}
        />

        <Text style={styles.label}>Monitor Sensor 02</Text>
        <TextInput
          style={styles.input}
          placeholder="Monitor Sensor 02"
          value={encerramentoData.monitorSensor02Encerramento.toString()}
          onChangeText={(text) => setEncerramentoData({ ...encerramentoData, monitorSensor02Encerramento: text === 'true' })}
        />

        <Text style={styles.label}>Temperatura Sensor 02</Text>
        <TextInput
          style={styles.input}
          placeholder="Temperatura Sensor 02"
          value={encerramentoData.temperaturaSensor02Encerramento.toString()}
          onChangeText={(text) => setEncerramentoData({ ...encerramentoData, temperaturaSensor02Encerramento: parseFloat(text) })}
        />

        <Text style={styles.label}>Temperatura Transmissão</Text>
        <TextInput
          style={styles.input}
          placeholder="Temperatura Transmissão"
          value={encerramentoData.temperaturaTransmissaoEncerramento.toString()}
          onChangeText={(text) => setEncerramentoData({ ...encerramentoData, temperaturaTransmissaoEncerramento: parseFloat(text) })}
        />

        <Text style={styles.label}>Status Transmissão</Text>
        <TextInput
          style={styles.input}
          placeholder="Status Transmissão"
          value={encerramentoData.statusTransmissaoEncerramento}
          onChangeText={(text) => setEncerramentoData({ ...encerramentoData, statusTransmissaoEncerramento: text })}
        />

        <Text style={styles.label}>Código Falha</Text>
        <TextInput
          style={styles.input}
          placeholder="Código Falha"
          value={encerramentoData.codigoFalhaEncerramento}
          onChangeText={(text) => setEncerramentoData({ ...encerramentoData, codigoFalhaEncerramento: text })}
        />

        <Text style={styles.label}>Status Monitores Emissão</Text>
        <TextInput
          style={styles.input}
          placeholder="Status Monitores Emissão"
          value={encerramentoData.statusMonitoresEmissaoEncerramento.toString()}
          onChangeText={(text) => setEncerramentoData({ ...encerramentoData, statusMonitoresEmissaoEncerramento: text === 'true' })}
        />

        <Text style={styles.label}>Voltagem Bateria</Text>
        <TextInput
          style={styles.input}
          placeholder="Voltagem Bateria"
          value={encerramentoData.voltagemBateriaEncerramento.toString()}
          onChangeText={(text) => setEncerramentoData({ ...encerramentoData, voltagemBateriaEncerramento: parseFloat(text) })}
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
        <TouchableOpacity onPress={handleEncerrarViagem} style={styles.buttonSend}>
          <Text style={styles.buttonTextSend}>Encerrar Viagem</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
}
