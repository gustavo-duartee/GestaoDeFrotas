import axios from "axios";

const api = axios.create({
    baseURL: "https://3268-177-71-66-45.ngrok-free.app/",
});

export default api;