import { KeyValuePair } from "./SharedTypes";

export interface IWine
{
    id: number | undefined,
    name: string,
    vineyards: KeyValuePair,
    appellation: KeyValuePair,
    vigneron: string,
}