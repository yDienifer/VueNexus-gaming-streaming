import type { AxiosInstance } from 'axios';
import axios from 'axios';

const api: AxiosInstance = axios.create({
    baseURL: "https://api.valorant.com/v1/",
})

export default api;