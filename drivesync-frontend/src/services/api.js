// import axios from "axios";

// const api = axios.create({
//   baseURL: "https://localhost:44344",
// });

// export default api;

import axios from "axios";

const api = axios.create({
  baseURL: "https://localhost:44344",
});

// Interceptor para tratar erros nas respostas
api.interceptors.response.use(
  (response) => response,
  (error) => {
    console.error(
      "Erro na resposta da API:",
      error.response ? error.response.data : error.message
    );
    return Promise.reject(error);
  }
);

// Interceptor para tratar erros nas requisições, se necessário
api.interceptors.request.use(
  (config) => {
    // Adicione cabeçalhos de autenticação ou outros parâmetros aqui
    return config;
  },
  (error) => {
    console.error("Erro na requisição da API:", error.message);
    return Promise.reject(error);
  }
);

export default api;
