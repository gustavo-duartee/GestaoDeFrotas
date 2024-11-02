import axios from "axios";

const api = axios.create({
    baseURL: "https://b58f-177-71-67-196.ngrok-free.app/",
});

export default api;