// ManutencaoCard.jsx
import React, { useEffect, useState } from 'react';
import { fetchDadosManutencao } from '../../services/api'; // Importando a função da api.js

const ManutencaoCard = () => {
  const [manutencaoData, setManutencaoData] = useState([]);

  useEffect(() => {
    // Buscar os dados de manutenção quando o componente for montado
    const getManutencaoData = async () => {
      try {
        const data = await fetchDadosManutencao(); // Chama a função para pegar os dados
        setManutencaoData(data); // Atualiza o estado com os dados recebidos
      } catch (error) {
        console.error("Erro ao buscar os dados de manutenção:", error);
      }
    };

    getManutencaoData();
  }, []);

  return (
    <div>
      <h3>Dados de Manutenção</h3>
      <ul>
        {manutencaoData.map((item) => (
          <li key={item.id}>{item.descricao}</li> // Modifique conforme os dados recebidos
        ))}
      </ul>
    </div>
  );
};

export default ManutencaoCard;
