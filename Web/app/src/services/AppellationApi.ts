import IAppellation from "../models/IAppellation";
import ServiceApi from "./ServiceApi";
import axios from "axios";

export class AppellationApi
{
    static async registerAppellation(appellation: IAppellation): Promise<IAppellation>
    {
        return await ServiceApi.post("appellations", appellation);
    }

    static async loadAppellation(): Promise<IAppellation[]>
    {
        const result = await axios.get<IAppellation[]>("appellations", ServiceApi.config);
        return result.data;
    }
}