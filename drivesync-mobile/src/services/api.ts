import axios from "axios";

const api = axios.create({
    baseURL: "https://247e-177-71-67-250.ngrok-free.app/",
});

export default api;