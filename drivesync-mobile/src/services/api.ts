import axios from "axios";

const api = axios.create({
    baseURL: "https://c71e-177-71-66-186.ngrok-free.app/",
});

export default api;