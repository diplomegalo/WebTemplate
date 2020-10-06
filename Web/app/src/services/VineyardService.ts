import { Vineyard } from "../store/vineyard/types"
import ServiceApi from "./ServiceApi";

export class VineyardService extends ServiceApi
{
    private static _instance: VineyardService;
    public static instance = () => VineyardService._instance || (VineyardService._instance = new VineyardService());

    public async listAllVineyard(): Promise<Vineyard[]>
    {
        return await this.get("vineyards");
    }
}