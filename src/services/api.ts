import type { AxiosInstance } from 'axios';
import axios from 'axios';

const api: AxiosInstance = axios.create({
    baseURL: "https://valorant-api.com/v1/playertitles",
})

export default api;