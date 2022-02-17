import axios from "axios";

const api = axios.create({
    baseURL: "https://desafioreact.s3.amazonaws.com",
});

export default api;