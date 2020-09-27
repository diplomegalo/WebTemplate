import axios from "axios";
import { Vineyard } from "../store/vineyard/types"
import ServiceApi from "./ServiceApi";

export class VineyardService
{
    static async listAllVineyard(): Promise<Vineyard[]>
    {
        const result = await axios.get<Vineyard[]>("vineyards", ServiceApi.config);
        return result.data;
    }
}