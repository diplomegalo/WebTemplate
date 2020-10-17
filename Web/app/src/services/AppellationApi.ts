import ServiceApi from "./ServiceApi";
import { Appellation } from "../store/appellation/types";

export class AppellationApi extends ServiceApi
{
    static _instance: AppellationApi;
    static instance = () => AppellationApi._instance || (AppellationApi._instance = new AppellationApi());

    public async loadAppellation(): Promise<Appellation[]>
    {
        return await this.get("appellations");
    }
}