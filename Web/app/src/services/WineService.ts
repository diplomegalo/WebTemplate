import IAppellation from "models/IAppellation";
import axios, { AxiosResponse } from "axios";
import { IVineyard } from "../models/IVineyard";
import { IWine } from "../models/IWine";

export default class WineServiceApi
{
    static config = {
        baseURL: "http://localhost:3000/api/",
        timeout: 10000,
    };

    static listWine(): Promise<IWine[]>
    {
        return axios.get("wines", this.config).then((result) => result.data);
    }

    static async registerAppellation(appellation: IAppellation): Promise<IAppellation>
    {
        const result = await axios.post("appellations", appellation, this.config);
        return result.data;
    }

    static async listAllAppellation(): Promise<IAppellation[]>
    {
        const result = await axios.get<IAppellation[]>("appellations", this.config);
        return result.data;
    }

    static async listAllVineyard(): Promise<IVineyard[]>
    {
        const result = await axios.get<IVineyard[]>("vineyards", this.config);
        return result.data;
    }

    static async registerWine(data: IWine)
    {
        await axios.post<IWine>("wines", data, this.config);
    }
}
