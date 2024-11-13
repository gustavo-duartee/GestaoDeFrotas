import axios from "axios";

const api = axios.create({
  baseURL: "https://fdf3-177-71-67-147.ngrok-free.app",
});

//export default api;

// import axios from "axios";

// const api = axios.create({
//   baseURL: "https://fbd4-177-71-67-7.ngrok-free.app/",
// });

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
