import axios from "axios";

const api = axios.create({
    baseURL: "https://4871-177-71-66-186.ngrok-free.app/",
});

export default api;