import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity, Alert } from 'react-native';
import styles from './styles';
import api from '../../services/api';
import { useNavigation } from '@react-navigation/native';
import { Ionicons } from '@expo/vector-icons';

const CardViagem = () => {
    const [viagemEmAndamento, setViagemEmAndamento] = useState(null);
    const navigation = useNavigation();

    useEffect(() => {
        const verificarViagemEmAndamento = async () => {
            try {
                const response = await api.get('/api/Viagens'); // Ajuste para o endpoint correto
                const viagem = response.data.find(v => v.status === 'Iniciada');
                setViagemEmAndamento(viagem || null);
            } catch (error) {
                console.error(error);
                console.error('Erro', 'Não foi possível verificar a viagem em andamento.');
            }
        };

        verificarViagemEmAndamento();
    }, []);

    return (
        <View style={styles.cardContainer}>
            <View style={styles.iconSquare}>
                <Ionicons style={styles.icon} name="map-outline" size={40} />
            </View>
            <View style={styles.cardContent}>
                {viagemEmAndamento ? (
                    <>
                        <Text style={styles.cardTitle}>Viagem em Andamento</Text>
                        <Text style={styles.cardInfo}>
                            Veículo: {viagemEmAndamento.veiculo.marca} - {viagemEmAndamento.veiculo.modelo}
                        </Text>
                        <Text style={styles.cardInfo}>
                            Data de início: {new Date(viagemEmAndamento.dataInicio).toLocaleString()}
                        </Text>
                        <Text style={styles.cardInfo}>Status: {viagemEmAndamento.status}</Text>
                    </>
                ) : (
                    <>
                        <Text style={styles.cardTitle}>Nenhuma Viagem em Andamento</Text>
                        <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('NovaViagem')}>
                            <Text style={styles.buttonText}>Iniciar Viagem</Text>
                        </TouchableOpacity>
                    </>
                )}
            </View>

            {viagemEmAndamento && (
                <View style={styles.detailsContainer}>
                    <View style={styles.row}>
                        <Text style={styles.valueTitle}>{viagemEmAndamento.origem || 'Origem não disponível'}</Text>
                        <Ionicons name="arrow-forward-outline" size={20} color="white" />
                        <Text style={styles.valueTitle}>{viagemEmAndamento.destino || 'Destino não disponível'}</Text>
                    </View>

                    <Text style={styles.valueDate}>
                        {new Date(viagemEmAndamento.dataSaida).toLocaleString() || 'Data não disponível'}
                    </Text>

                    <View style={styles.row}>
                        <Text style={styles.value}>
                            {new Date(viagemEmAndamento.horaSaida).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }) || 'Hora de saída não disponível'}
                        </Text>
                        <Text style={styles.value}>
                            {new Date(viagemEmAndamento.horaChegada).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }) || 'Hora de chegada não disponível'}
                        </Text>
                    </View>
                </View>
            )}
        </View>
    );
};

export default CardViagem;
