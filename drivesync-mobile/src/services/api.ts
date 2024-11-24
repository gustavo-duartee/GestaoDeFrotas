import axios from "axios";
import API_BASE_URL from "../config/config"; // Importe a URL do arquivo de configuração

const api = axios.create({
  baseURL: API_BASE_URL,
});

export default api;
