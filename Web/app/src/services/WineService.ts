import axios, { AxiosResponse } from "axios";
import ServiceApi  from "./ServiceApi";
import { Wine } from "../store/wine/types";

export default class WineServiceApi
{
    static listWine(): Promise<Wine[]>
    {
        return axios.get("wines", ServiceApi.config).then((result) => result.data);
    }

    static async registerWine(data: Wine): Promise<Wine>
    {
        return await axios.post("wines", data, ServiceApi.config)
            .then((result) => result.data);
    }
}
