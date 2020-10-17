import ServiceApi from "./ServiceApi";
import { Wine } from "../store/wine/types";

export default class WineServiceApi extends ServiceApi
{
    private static _instance: WineServiceApi;
    public static instance = () => WineServiceApi._instance || (WineServiceApi._instance = new WineServiceApi())

    public async listWine(): Promise<Wine[]>
    {
        return await this.get("wines");
    }

    public async registerWine(data: Wine): Promise<Wine>
    {
        return await this.post("wines", data);
    }
}
