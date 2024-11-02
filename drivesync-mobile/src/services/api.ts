import axios from "axios";

const api = axios.create({
    baseURL: "https://9306-177-71-67-114.ngrok-free.app/",
});

export default api;