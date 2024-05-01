import axios from "axios";

const api = axios.create({
  baseURL: "https://localhost:44344",
});

export default api;
