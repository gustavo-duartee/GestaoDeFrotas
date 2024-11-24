import axios from "axios";

const api = axios.create({
    baseURL: "https://a6b0-177-71-67-66.ngrok-free.app/",
});

export default api;