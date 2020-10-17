import axios, { AxiosError, AxiosResponse } from "axios";

export default class ServiceApi
{
    public _invoke = (() =>
    {
        axios.defaults.baseURL = process.env.API_URL;
        axios.defaults.timeout = 10000;
    })();

    public handleResponse<T>(response: AxiosResponse<T>): T
    {
        if (response.status >= 200 && response.status < 300)
        {
            return response.data;
        }

        throw new Error("An error occurs when handle response.");
    }

    public handleError(error: AxiosError)
    {
        console.error("Error", error.message);
    }

    public post<T>(url: string, data: T): Promise<T>
    {
        return axios.post(url, data)
            .then(this.handleResponse)
            .catch(this.handleError);
    }

    public get<T>(url: string): Promise<T>
    {
        return axios.get(url)
            .then(this.handleResponse)
            .catch(this.handleError);
    }
}