import axios, { AxiosInstance } from "axios";

const api: AxiosInstance = axios.create({
    baseURL: "https://br.api.riotgames.com/val/status/v1/platform-data?api_key=RGAPI-cd0b8f16-e514-48cc-85a7-dd1753e00f7a",
})

export default api;