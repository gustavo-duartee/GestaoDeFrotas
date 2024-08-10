import axios from 'axios';
import React, { useState } from 'react';
import { Button, TextInput, View } from 'react-native';
import api from '../../services/api';

const EncerrarViagem = () => {
  const [viagemId, setViagemId] = useState('');
  const [localFim, setLocalFim] = useState('');
  const [distancia, setDistancia] = useState('');
  const [duracao, setDuracao] = useState('');
  const [notas, setNotas] = useState('');

  const encerrarViagem = async () => {
    try {
      const response = await api.post('api/viagens/encerrar/${viagemId}', {
        localFim,
        distancia: parseFloat(distancia),
        duracao: parseInt(duracao),
        notas,
        dataFim: new Date(),
        ativa: false
      });
      console.log('Viagem encerrada:', response.data);
    } catch (error) {
      console.error('Erro ao encerrar a viagem:', error);
    }
  };

  return (
    <View>
      <TextInput 
        placeholder="ID da Viagem" 
        value={viagemId} 
        onChangeText={text => setViagemId(text)} 
      />
      <TextInput 
        placeholder="Local de Fim" 
        value={localFim} 
        onChangeText={text => setLocalFim(text)} 
      />
      <TextInput 
        placeholder="Distância" 
        value={distancia} 
        onChangeText={text => setDistancia(text)} 
        keyboardType="numeric" 
      />
      <TextInput 
        placeholder="Duração" 
        value={duracao} 
        onChangeText={text => setDuracao(text)} 
        keyboardType="numeric" 
      />
      <TextInput 
        placeholder="Notas" 
        value={notas} 
        onChangeText={text => setNotas(text)} 
      />
      <Button title="Encerrar Viagem" onPress={encerrarViagem} />
    </View>
  );
};

export default EncerrarViagem;
