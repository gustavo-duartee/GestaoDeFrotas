import axios from "axios";

const api = axios.create({
    baseURL: "https://8023-177-71-67-66.ngrok-free.app/",
});

export default api;