import React, { useState, useEffect } from "react";
import { View, Text, TextInput, ScrollView, TouchableOpacity } from "react-native";
import CheckBox from 'react-native-check-box';
import { Picker } from '@react-native-picker/picker'; // Picker para combobox
import styles from './styles';
import api from '../../services/api'; // Importar a instância da API

export default function NovaViagem() {
    const [checkList, setCheckList] = useState({
        brakes: false,
        tires: false,
        lights: false,
        fuel: false,
    });

    const [veiculos, setVeiculos] = useState([]);
    const [selectedVeiculo, setSelectedVeiculo] = useState("");

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
    }, []);

    const handleCheckBoxChange = (item) => {
        setCheckList({ ...checkList, [item]: !checkList[item] });
    };

    return (
        <ScrollView style={styles.container}>
            <Text style={styles.subtitle}>Informações da viagem</Text>

            <View style={styles.inputsContainer}>
                <TextInput
                    style={styles.input}
                    placeholder="Localização atual"
                    placeholderTextColor="#aaa"
                />
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
                <TextInput
                    style={styles.input}
                    placeholder="Passageiros"
                    placeholderTextColor="#aaa"
                />
                <TextInput
                    style={styles.input}
                    placeholder="Quilometragem atual"
                    placeholderTextColor="#aaa"
                />
            </View>

            <View style={styles.divider} />

            <Text style={styles.subtitle}>Check-list</Text>
            <View style={styles.checkListContainer}>
                <View style={styles.checkListItem}>
                    <Text style={styles.checkListText}>Freios</Text>
                    <CheckBox
                        style={styles.checkBox}
                        checkBoxColor='#00875F'
                        isChecked={checkList.brakes}
                        onClick={() => handleCheckBoxChange('brakes')}
                    />
                </View>
                <View style={styles.checkListItem}>
                    <Text style={styles.checkListText}>Pneus</Text>
                    <CheckBox
                        style={styles.checkBox}
                        checkBoxColor='#00875F'
                        isChecked={checkList.tires}
                        onClick={() => handleCheckBoxChange('tires')}
                    />
                </View>
                <View style={styles.checkListItem}>
                    <Text style={styles.checkListText}>Luzes</Text>
                    <CheckBox
                        style={styles.checkBox}
                        checkBoxColor='#00875F'
                        isChecked={checkList.lights}
                        onClick={() => handleCheckBoxChange('lights')}
                    />
                </View>
                <View style={styles.checkListItem}>
                    <Text style={styles.checkListText}>Combustível</Text>
                    <CheckBox
                        style={styles.checkBox}
                        checkBoxColor='#00875F'
                        isChecked={checkList.fuel}
                        onClick={() => handleCheckBoxChange('fuel')}
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
