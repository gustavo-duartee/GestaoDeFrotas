import React, { useState, useEffect } from "react";
import { View, Text, TextInput, ScrollView, TouchableOpacity, Alert } from "react-native";
import { Picker } from '@react-native-picker/picker';
import * as Location from 'expo-location';
import styles from './styles';
import api from '../../services/api';
import MapScreen from '../../components/Map';

export default function EncerrarViagem({ route, navigation }) {
  const [checkList, setCheckList] = useState({
    freios: false,
    pneus: false,
    luzes: false,
    combustivel: false,
    equipamentos: false,
    estepe: false,
    extintor: false
  });
  const { viagem } = route.params;
  const [location, setLocation] = useState(null);
  const [locationText, setLocationText] = useState("Obtendo localização...");
  const [observacoes, setObservacoes] = useState("");
  const [encerramentoData, setEncerramentoData] = useState({
    localizacaoEncerramento: "",
    observacoesEncerramento: "",
    nivelCombustivelEncerramento: 0,
    temperaturaSensor02Encerramento: 0,
    temperaturaTransmissaoEncerramento: 0,
    statusTransmissaoEncerramento: "",
    codigoFalhaEncerramento: "",
    statusControleEmissaoEncerramento: true,
    monitorCatalisadorEncerramento: true,
    monitorSensor02Encerramento: true,
    statusMonitoresEmissaoEncerramento: true,
    voltagemBateriaEncerramento: 0,
  });

  useEffect(() => {

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

  console.log(viagem.id);


  const handleCheckBoxChange = (item) => {
    setCheckList({ ...checkList, [item]: !checkList[item] });
  };

  const handleEncerrarViagem = async () => {

    if (!location) {
      Alert.alert('Localização', 'Aguarde enquanto obtemos sua localização.');
      return;
    }


    try {
      const response = await api.post(`/api/Viagens/EncerrarViagem/${viagem.id}`, {
        localizacaoEncerramento: locationText,
        observacoesEncerramento: observacoes,
        nivelCombustivelEncerramento: encerramentoData.nivelCombustivelEncerramento,
        temperaturaSensor02Encerramento: encerramentoData.temperaturaSensor02Encerramento,
        temperaturaTransmissaoEncerramento: encerramentoData.temperaturaTransmissaoEncerramento,
        statusTransmissaoEncerramento: encerramentoData.statusTransmissaoEncerramento,
        codigoFalhaEncerramento: encerramentoData.codigoFalhaEncerramento,
        statusControleEmissaoEncerramento: encerramentoData.statusControleEmissaoEncerramento,
        monitorCatalisadorEncerramento: encerramentoData.monitorCatalisadorEncerramento,
        monitorSensor02Encerramento: encerramentoData.monitorSensor02Encerramento,
        statusMonitoresEmissaoEncerramento: encerramentoData.statusMonitoresEmissaoEncerramento,
        voltagemBateriaEncerramento: encerramentoData.voltagemBateriaEncerramento
      });

      if (response.status === 200) {
        Alert.alert('Sucesso', 'Viagem encerrada com sucesso!');
        navigation.navigate('Início');
      } else {
        Alert.alert('Erro', 'Erro ao encerrar a viagem.');
      }
    } catch (error) {
      console.error('Erro ao encerrar a viagem:', error);
      Alert.alert('Erro', `Não foi possível encerrar a viagem: ${error.message}`);
    }
  };

  // Função para preencher os campos automaticamente com dados simulados
  const handleExtrairDados = () => {
    setEncerramentoData({
      localizacaoEncerramento: locationText,
      observacoesEncerramento: 'Viagem finalizada com sucesso. Sem incidentes.',
      nivelCombustivelEncerramento: 65,
      temperaturaSensor02Encerramento: 90,
      temperaturaTransmissaoEncerramento: 75,
      statusTransmissaoEncerramento: 'Funcionando',
      codigoFalhaEncerramento: 'Nenhuma',
      statusControleEmissaoEncerramento: true,
      monitorCatalisadorEncerramento: true,
      monitorSensor02Encerramento: true,
      statusMonitoresEmissaoEncerramento: true,
      voltagemBateriaEncerramento: 12,
    });
  };

  return (
    <ScrollView style={styles.container}>

      <Text style={styles.subtitle}>Id: {viagem.id}</Text>
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
        <Text style={styles.label}>Nível de Combustível</Text>
        <TextInput
          style={styles.input}
          placeholder="Nível de Combustível"
          value={encerramentoData.nivelCombustivelEncerramento.toString()}
          editable={false}
        />

        <Text style={styles.label}>Temperatura Sensor 02</Text>
        <TextInput
          style={styles.input}
          placeholder="Temperatura Sensor 02"
          value={encerramentoData.temperaturaSensor02Encerramento.toString()}
          editable={false}
        />

        <Text style={styles.label}>Temperatura Transmissão</Text>
        <TextInput
          style={styles.input}
          placeholder="Temperatura Transmissão"
          value={encerramentoData.temperaturaTransmissaoEncerramento.toString()}
          editable={false}
        />

        <Text style={styles.label}>Status Transmissão</Text>
        <TextInput
          style={styles.input}
          placeholder="Status Transmissão"
          value={encerramentoData.statusTransmissaoEncerramento}
          editable={false}
        />

        <Text style={styles.label}>Código Falha</Text>
        <TextInput
          style={styles.input}
          placeholder="Código Falha"
          value={encerramentoData.codigoFalhaEncerramento}
          editable={false}
        />

        <Text style={styles.label}>Status Controle Emissão</Text>
        <Text style={styles.input}>
          {encerramentoData.statusControleEmissaoEncerramento ? "Ativado" : "Desativado"}
        </Text>

        <Text style={styles.label}>Monitor Catalisador</Text>
        <Text style={styles.input}>
          {encerramentoData.monitorCatalisadorEncerramento ? "Ativado" : "Desativado"}
        </Text>

        <Text style={styles.label}>Monitor Sensor 02</Text>
        <Text style={styles.input}>
          {encerramentoData.monitorSensor02Encerramento ? "Ativado" : "Desativado"}
        </Text>

        <Text style={styles.label}>Status Monitores Emissão</Text>
        <Text style={styles.input}>
          {encerramentoData.statusMonitoresEmissaoEncerramento ? "Ativado" : "Desativado"}
        </Text>

        <Text style={styles.label}>Voltagem Bateria</Text>
        <TextInput
          style={styles.input}
          placeholder="Voltagem Bateria"
          value={encerramentoData.voltagemBateriaEncerramento.toString()}
          editable={false}
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
        <TouchableOpacity onPress={handleExtrairDados} style={styles.button}>
          <Text style={styles.buttonText}>Extrair dados OBD</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={handleEncerrarViagem} style={styles.button}>
          <Text style={styles.buttonText}>Encerrar Viagem</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
}
