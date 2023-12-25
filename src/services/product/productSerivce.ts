import { axiosInstance } from "../axiosService";

export function getProducts(): Promise<any>{
    return axiosInstance.get("/producs")    
}