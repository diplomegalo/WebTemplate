import { KeyValuePair } from "./SharedTypes";

export interface IWine
{
    id: number | undefined,
    name: string,
    vineyards: number,
    appellation: number,
    vigneron: string,
}