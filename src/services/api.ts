import axios from "axios";
import { getUserLocalStorage } from "@/context";

export const Api = axios.create({
    baseURL: `${import.meta.env.VITE_API_HOST}/`,
});

Api.interceptors.request.use(
    (config) => {
        const user = getUserLocalStorage()

        config.headers.Authorization = user?.token;

        return config;
    },
    (error) => {
        return Promise.reject(error)
    }
)