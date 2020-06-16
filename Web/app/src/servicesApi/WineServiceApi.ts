import IAppellation from "models/IAppellation";
import axios, { AxiosResponse } from "axios";

export default class WineServiceApi
{
    static config = {
        baseURL: "http://localhost:3000/api/",
        timeout: 10000,
    };

    static registerAppellation(appellation: IAppellation): Promise<IAppellation>
    {
        return axios.post("appelations", appellation, this.config)
            .then((result: AxiosResponse) => result.data);
    }

    static async listAllAppellation(): Promise<IAppellation[]>
    {
        const result = await axios.get<IAppellation[]>("appellations", this.config);
        return result.data;
    }
}
