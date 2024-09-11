import axios from "axios";

const api = axios.create({
    baseURL: "https://d527-177-71-67-250.ngrok-free.app/",
});

export default api;