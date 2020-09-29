import axios, { AxiosError, AxiosResponse } from "axios";

const STATUS_OK: string = "OK";

export default class ServiceApi
{
    config = {
        baseURL: process.env.API_URL,
        timeout: 10000,
    };

    public handleResponse<T>(response: AxiosResponse<T>): T
    {
        if (response.statusText === STATUS_OK)
        {
            return response.data;
        }

        throw new Error("An error occurs when handle response.");
    }

    public handleError(error: AxiosError)
    {
        console.log("Error", error.message);
    }

    public post<T>(url: string, data: T): Promise<T>
    {
        return axios.post(url, data)
            .then(this.handleResponse)
            .catch(this.handleError);
    }

    public get<T>(url: string): Promise<T>
    {
        return axios.get(url, this.config)
            .then(this.handleResponse)
            .catch(this.handleError);
    }
}