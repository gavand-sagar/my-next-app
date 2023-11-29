import { store } from "@/data/store";
import Axios, { AxiosInstance } from "axios";
const baseURL = "https://dummyjson.com";

const token = () => "Bearer " + store.getState().counter.value

export const axiosInstance: AxiosInstance = Axios.create({
    baseURL,
});

axiosInstance.interceptors.request.use(config=>{
config.headers.Authorization = token()
    return config
})