import axios from "axios";

const api = axios.create({
    baseURL: "https://685d-177-71-67-227.ngrok-free.app/",
});

export default api;