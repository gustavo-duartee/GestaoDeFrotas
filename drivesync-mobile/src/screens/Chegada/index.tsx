import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Button, TextInput, View } from 'react-native';
import { LatLng } from 'react-native-maps';
import { stopLocationTask } from '../../tasks/backgroundLocationTask';
import { getStorageLocation } from '../../libs/asyncStorage/locationStorage';
import { Map } from '../../components/Map';
import { Locations } from '../../components/Locations';
import { getAddressLocation } from '../../utils/getAddressLocation';
import { LocationInfoProps } from '../../components/LocationInfo';
import { Loading } from '../../components/Loading';
import api from '../../services/api';

type RouteParamsProps = {
  id: string;
}

export function Chegada() {
  const [dataNotSynced, setDataNotSynced] = useState(false);
  const [coordinates, setCoordinates] = useState<LatLng[]>([]);
  const [partida, setPartida] = useState<LocationInfoProps>({} as LocationInfoProps);
  const [chegada, setChegada] = useState<LocationInfoProps | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  //NOVO CÓDIGO
  async function removeVehicleUsage() {
    try {
      await api.delete(`/historic/${historic.id}`);
      await stopLocationTask();
      goBack();
    } catch (error) {
      console.log(error);
      Alert.alert('Error', 'Não foi possível remover o histórico de uso do veículo.');
    }
  }
  
  // NOVO CÓDIGO
  async function handleArrivalRegister() {
    try {
      if (!historic) {
        return Alert.alert('Error', 'Não foi possível obter os dados para registrar a chegada do veículo.');
      }
  
      const locations = await getStorageLocation();
  
      await api.put(`/historic/${historic.id}`, {
        status: 'arrival',
        update_at: new Date(),
        coords: locations,
      });
  
      await stopLocationTask();
  
      Alert.alert('Chegada', 'Chegada registrada com sucesso!');
      goBack();
    } catch (error) {
      console.log(error);
      Alert.alert('Error', 'Não foi possível registrar a chegada do veículo.');
    }
  }
  



  async function getLocationsInfo() {
    try {
      const { data: historic } = await api.get(`/historic/${historicId}`);
  
      const lastSync = await getLastAsyncTimeStamp();
      const updateAt = new Date(historic.update_at).getTime();
      setDataNotSynced(updateAt > lastSync);
  
      if (historic.status === 'departure') {
        const locationsStorage = await getStorageLocation();
        setCoordinates(locationsStorage);
      } else {
        setCoordinates(historic.coords ?? []);
      }
  
      if (historic.coords[0]) {
        const departureStreetName = await getAddressLocation(historic.coords[0]);
  
        setPartida({
          label: `Saindo em ${departureStreetName} ?? ''}`,
          description: dayjs(new Date(historic.coords[0].timestamp)).format('DD/MM/YYYY [às] HH:mm'),
        });
      }
  
      if (historic.status === 'chegada') {
        const lastLocation = historic.coords[historic.coords.length - 1];
        const arrivalStreetName = await getAddressLocation(lastLocation);
  
        setChegada({
          label: `Chegando em ${arrivalStreetName} ?? ''}`,
          description: dayjs(new Date(lastLocation.timestamp)).format('DD/MM/YYYY [às] HH:mm'),
        });
      }
  
      setIsLoading(false);
    } catch (error) {
      console.log(error);
    }
  }
  

  useEffect(() => {
    getLocationsInfo();
  }, [historic]);

  if(isLoading)
  {
    return(
      <Loading />
    )
  }

  return (
    <View>
      
      { coordinates.length > 0 && <Map coordinates={coordinates}/> }

      <Content>
        <Locations
          partida={partida}
          chegada={chegada}
        />

      </Content>

      <Button title="Encerrar Viagem" onPress={encerrarViagem} />
    </View>
  );
};

