// api.js
import axios from "axios";

const api = axios.create({
  baseURL: "https://8023-177-71-67-66.ngrok-free.app/", // ou a URL da sua API
});

// api.js
export const fetchDadosManutencao = async () => {
  try {
    const response = await api.get('/Manutencao');
    console.log("Dados de manutenção recebidos:", response.data); // Verifique os dados retornados no console
    return response.data;
  } catch (error) {
    console.error("Erro ao buscar dados de manutenção:", error);
    throw error; // Lançar erro para ser tratado no componente
  }
};


api.interceptors.response.use(
  (response) => response,
  (error) => {
    console.error("Erro na resposta da API:", error.response ? error.response.data : error.message);
    return Promise.reject(error);
  }
);

api.interceptors.request.use(
  (config) => config,
  (error) => {
    console.error("Erro na requisição da API:", error.message);
    return Promise.reject(error);
  }
);

export default api;
