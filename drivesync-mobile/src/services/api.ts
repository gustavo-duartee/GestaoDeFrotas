import axios from "axios";

const api = axios.create({
    baseURL: "https://ec02-177-71-67-16.ngrok-free.app/",
});

export default api;