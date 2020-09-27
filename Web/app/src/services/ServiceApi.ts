import axios, { AxiosError, AxiosResponse } from "axios";

export default class ServiceApi
{
    static config = {
        baseURL: process.env.API_URL,
        timeout: 10000,
    };

    public static handleResponse<T>(response: AxiosResponse<T>): T
    {
        if(response.statusText === "Ok")
        {
            return response.data;
        }
        throw new Error("Une erreur s'est produite veillez.");
    }

    public static handleError(error: AxiosError)
    {
        console.log("Error", error.message);
    }

    public static post<TData>(url: string, data: TData): Promise<TData>
    {
        return axios.post("url", data, this.config)
            .then(ServiceApi.handleResponse)
            .catch(ServiceApi.handleError)
    }
}