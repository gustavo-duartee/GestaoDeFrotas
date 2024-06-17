import axios from "axios";

const api = axios.create({
    baseURL: " https://d868-177-71-67-7.ngrok-free.app/",
});

export default api;