import axios from "axios";

const api = axios.create({
    baseURL: "https://a26a-177-71-67-45.ngrok-free.app/",
});

export default api;