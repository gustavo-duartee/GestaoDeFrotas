import axios from "axios";

const api = axios.create({
    baseURL: "https://5d9a-177-71-67-147.ngrok-free.app/",
});

export default api;