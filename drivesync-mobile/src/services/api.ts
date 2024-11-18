import axios from "axios";

const api = axios.create({
    baseURL: "https://5a36-177-71-66-186.ngrok-free.app/",
});

export default api;