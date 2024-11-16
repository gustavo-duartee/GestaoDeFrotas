import { HubConnectionBuilder } from '@microsoft/signalr';

// Variável para armazenar a conexão do SignalR
let connection = null;

// Função para conectar ao SignalR
export const connectSignalR = () => {
  if (connection) {
    console.log('Já conectado ao SignalR!');
    return connection;  // Se já estiver conectado, retorna a conexão existente
  }

  connection = new HubConnectionBuilder()
    .withUrl('https://7eba-177-71-66-186.ngrok-free.app/viagensHub')  // Substitua pela URL do seu servidor SignalR
    .build();

  connection.start()
    .then(() => {
      console.log('Conectado ao SignalR!');
    })
    .catch((error) => {
      console.error('Erro ao conectar ao SignalR:', error);
      connection = null;  // Garante que a variável connection seja resetada em caso de falha
    });

  return connection;
};

// Função para escutar atualizações do SignalR
export const listenToUpdates = (onUpdate) => {
  if (connection) {
    connection.on('AtualizarViagens', (data) => {
      console.log('Atualização de viagem recebida:', data);
      onUpdate(data);  // Chama a função de callback que será passada como parâmetro
    });
  } else {
    console.warn('Conexão SignalR não estabelecida. Por favor, conecte primeiro.');
  }
};

// Função para escutar atualizações de veículo
export const listenToVeiculoUpdates = (onUpdate) => {
  if (connection) {
    connection.on('VeiculoAtualizado', (data) => {
      console.log('Atualização de veículo recebida:', data);
      onUpdate(data);  // Chama a função de callback que será passada como parâmetro
    });
  } else {
    console.warn('Conexão SignalR não estabelecida. Por favor, conecte primeiro.');
  }
};

// Função para desconectar do SignalR
export const disconnectSignalR = () => {
  if (connection) {
    connection.stop()
      .then(() => {
        console.log('Desconectado do SignalR');
        connection = null;  // Reseta a conexão após a desconexão
      })
      .catch((error) => {
        console.error('Erro ao desconectar do SignalR:', error);
      });
  } else {
    console.warn('Nenhuma conexão ativa para desconectar.');
  }
};
