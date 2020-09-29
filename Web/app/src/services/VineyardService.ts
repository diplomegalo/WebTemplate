import axios from "axios";
import { Vineyard } from "../store/vineyard/types"
import ServiceApi from "./ServiceApi";

export class VineyardService
{
    private static _instance: VineyardService;
    public static instance = () => VineyardService._instance || (VineyardService._instance = new VineyardService());

    public async listAllVineyard(): Promise<Vineyard[]>
    {
        return await axios.get("vineyards");
    }
}