import React, { useState, useEffect } from "react";
import { View, Text, TextInput, ScrollView, TouchableOpacity, Alert } from "react-native";
import CheckBox from 'react-native-check-box';
import { Picker } from '@react-native-picker/picker';
import * as Location from 'expo-location';
import styles from './styles';
import api from '../../services/api';
import MapScreen from '../../components/Map';  // Importe o MapScreen
import Veiculo from "../Veiculos";

export default function NovaViagem() {
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

        {/* Exibir o componente MapScreen */}
        <MapScreen location={location} />
      </View>

      <Text style={styles.subtitle}>Sua localização</Text>

      <View style={styles.inputsContainer}>
            <View style={styles.divider} />
                <View style={styles.pickerContainer}>
                    <Picker
                        selectedValue={selectedVeiculo}
                        onValueChange={(itemValue, itemIndex) => setSelectedVeiculo(itemValue)}
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

            <View style={styles.divider} />


            {/* Check-list e outros componentes */}

            <Text style={styles.subtitle}>Segurança</Text>
            <View style={styles.checkListContainer}>
                <View style={styles.checkListItem}>
                    <Text style={[
                        styles.checkListText,
                        checkList.freios && { textDecorationLine: 'line-through' } // Aplica o risco se estiver marcado
                    ]}>
                        Freios
                    </Text>
                    <CheckBox
                        style={styles.checkBox}
                        checkBoxColor='#00875F'
                        isChecked={checkList.freios}
                        onClick={() => handleCheckBoxChange('freios')}
                    />
                </View>
                <View style={styles.checkListItem}>
                    <Text style={[
                        styles.checkListText,
                        checkList.pneus && { textDecorationLine: 'line-through' }
                    ]}>
                        Pneus
                    </Text>
                    <CheckBox
                        style={styles.checkBox}
                        checkBoxColor='#00875F'
                        isChecked={checkList.pneus}
                        onClick={() => handleCheckBoxChange('pneus')}
                    />
                </View>
                <View style={styles.checkListItem}>
                    <Text style={[
                        styles.checkListText,
                        checkList.luzes && { textDecorationLine: 'line-through' }
                    ]}>
                        Luzes
                    </Text>
                    <CheckBox
                        style={styles.checkBox}
                        checkBoxColor='#00875F'
                        isChecked={checkList.luzes}
                        onClick={() => handleCheckBoxChange('luzes')}
                    />
                </View>
                <View style={styles.checkListItem}>
                    <Text style={[
                        styles.checkListText,
                        checkList.combustivel && { textDecorationLine: 'line-through' }
                    ]}>
                        Combustível
                    </Text>
                    <CheckBox
                        style={styles.checkBox}
                        checkBoxColor='#00875F'
                        isChecked={checkList.combustivel}
                        onClick={() => handleCheckBoxChange('combustivel')}
                    />
                </View>
                <View style={styles.checkListItem}>
                    <Text style={[
                        styles.checkListText,
                        checkList.equipamentos && { textDecorationLine: 'line-through' }
                    ]}>
                        Triângulo, macaco e chave de roda
                    </Text>
                    <CheckBox
                        style={styles.checkBox}
                        checkBoxColor='#00875F'
                        isChecked={checkList.equipamentos}
                        onClick={() => handleCheckBoxChange('equipamentos')}
                    />
                </View>
                <View style={styles.checkListItem}>
                    <Text style={[
                        styles.checkListText,
                        checkList.estepe && { textDecorationLine: 'line-through' }
                    ]}>
                        Estepe
                    </Text>
                    <CheckBox
                        style={styles.checkBox}
                        checkBoxColor='#00875F'
                        isChecked={checkList.estepe}
                        onClick={() => handleCheckBoxChange('estepe')}
                    />
                </View>
                <View style={styles.checkListItem}>
                    <Text style={[
                        styles.checkListText,
                        checkList.extintor && { textDecorationLine: 'line-through' }
                    ]}>
                        Extintor de incêndio
                    </Text>
                    <CheckBox
                        style={styles.checkBox}
                        checkBoxColor='#00875F'
                        isChecked={checkList.extintor}
                        onClick={() => handleCheckBoxChange('extintor')}
                    />
                </View>
            </View>

            <View style={styles.divider} />

            <Text style={styles.subtitle}>Observações</Text>
            <TextInput
                editable
                multiline
                numberOfLines={4}
                maxLength={40}
                style={styles.obsInput}
                placeholder="Digite suas observações aqui"
                placeholderTextColor="#aaa"
            />

            <TouchableOpacity style={styles.button}>
                <Text style={styles.buttonText}>Iniciar</Text>
            </TouchableOpacity>
    </ScrollView>
  );
}
