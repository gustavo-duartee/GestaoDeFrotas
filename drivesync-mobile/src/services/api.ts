import axios from "axios";

const api = axios.create({
    baseURL: "https://8f88-177-71-66-215.ngrok-free.app/",
});

export default api;