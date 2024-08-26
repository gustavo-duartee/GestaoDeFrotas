import axios from "axios";

const api = axios.create({
    baseURL: "https://0466-177-71-67-193.ngrok-free.app/",
});

export default api;