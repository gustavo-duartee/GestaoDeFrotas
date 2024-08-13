import axios from "axios";

const api = axios.create({
    baseURL: "https://5724-177-71-67-16.ngrok-free.app/",
});

export default api;