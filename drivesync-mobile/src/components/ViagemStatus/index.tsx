import React, { useState, useEffect } from "react";
import { View, Text, Alert } from "react-native";
import { Ionicons } from '@expo/vector-icons';
import { TouchableOpacity } from "react-native-gesture-handler";
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '../../@type/navigation';
import * as Location from 'expo-location';  
import MapScreen from '../../components/Map';
import styles from './styles';
import { connectSignalR, listenToUpdates, disconnectSignalR } from '../../services/signalRService';

type NavigationProp = StackNavigationProp<RootStackParamList, 'EncerrarViagem'>;

interface ViagemCardProps {
  viagem: {
    id: number;
    origem: string;
    destino: string;
    dataInicio: string;
    status: string;
    localizacaoInicio: string;
    veiculoId: string;
  } | null;
}

export default function ViagemCard({ viagem }: ViagemCardProps) {
  const [location, setLocation] = useState<any>(null);
  const [locationText, setLocationText] = useState<string>("Obtendo localização...");
  const [viagemAtualizada, setViagemAtualizada] = useState(viagem);  // Estado para a viagem atualizada

  const navigation = useNavigation<NavigationProp>();

  const handleCardPress = () => {
    if (viagem) {
      navigation.navigate('EncerrarViagem', { viagem });
    }
  };

  useEffect(() => {
    // Conectar ao SignalR
    const connection = connectSignalR();

    // Ouvir atualizações de viagem em tempo real
    listenToUpdates((data) => {
      console.log('Viagem atualizada:', data);
      setViagemAtualizada(data);  // Atualiza a viagem com os novos dados
    });

    // Limpar a conexão quando o componente for desmontado
    return () => {
      disconnectSignalR();
    };
  }, []);  // Este efeito só roda uma vez, quando o componente for montado

  useEffect(() => {
    const getLocation = async () => {
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== 'granted') {
        Alert.alert('Permissão negada', 'Precisamos da permissão para acessar sua localização.');
        return;
      }

      let location = await Location.getCurrentPositionAsync({});
      setLocation(location);
      setLocationText(`${location.coords.latitude}, ${location.coords.longitude}`);
    };

    getLocation();
  }, []);

  const getStatusStyles = (status: string) => {
    switch (status) {
      default:
        return { backgroundColor: '#f3f3f3', color: '#0b0b0b' }; 
    }
  };

  const statusStyles = viagemAtualizada ? getStatusStyles(viagemAtualizada.status) : { backgroundColor: '#8D8D99', color: '#8D8D99' };

  return (
    <TouchableOpacity onPress={handleCardPress} disabled={!viagemAtualizada}>
      <View style={styles.container}>
        <View style={styles.card}>
          <View style={styles.content}>
            {viagemAtualizada ? (
              <>
                <View style={styles.row}>
                  <MapScreen location={location} />
                </View>

                <View style={styles.cardContent}>
                  <View style={styles.row}>
                    <Text style={styles.valueTitle}>{viagemAtualizada.localizacaoInicio}</Text>
                    <Ionicons name="arrow-forward-outline" size={20} color="#000" />
                    <Text style={styles.valueTitle}>...</Text>
                  </View>

                  <View style={styles.row}>
                    <Text style={styles.valueSubtitle}>
                      {new Date(viagemAtualizada.dataInicio).toLocaleDateString('pt-BR', {
                        day: '2-digit',
                        month: 'short',
                        year: 'numeric'
                      })} - {new Date(viagemAtualizada.dataInicio).toLocaleTimeString('pt-BR', { hour: '2-digit', minute: '2-digit' })}
                    </Text>
                  </View>

                  <View style={styles.row}>
                    <Text style={styles.valueSubtitle}>Veículo: {viagemAtualizada.veiculoId}</Text>
                  </View>

                  <View style={styles.row}>
                    <Text style={styles.valueSubtitle}>Id: {viagemAtualizada.id}</Text>
                  </View>

                  <View style={styles.valueStatusBadge}>
                    <Text style={styles.valueSubtitle}>
                      {viagemAtualizada.status === '0' ? 'Encerrada' : 'Em andamento'}
                    </Text>
                    <View style={styles.statusCircle} />
                  </View>

                </View>
              </>
            ) : (
              <Text style={styles.valueTitle}>Nenhuma Viagem em Andamento</Text>
            )}
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );
}
