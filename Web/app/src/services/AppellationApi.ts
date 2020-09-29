import ServiceApi from "./ServiceApi";
import axios from "axios";
import { Appellation } from "../store/appellation/types";

export class AppellationApi extends ServiceApi
{
    static _instance: AppellationApi;
    static instance = () => AppellationApi._instance || (AppellationApi._instance = new AppellationApi());

    public async registerAppellation(appellation: Appellation): Promise<Appellation>
    {
        return await this.post("appellations", appellation);
    }

    public async loadAppellation(): Promise<Appellation[]>
    {
        return await axios.get("appellations");
    }
}