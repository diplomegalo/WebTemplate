import { Vineyard } from "../vineyard/types";
import { Appellation } from "../appellation/types";

export type Wine =
{
    id?: number,
    name: string,
    vineyardId: number,
    vineyard: Vineyard,
    appellationId: number,
    appellation: Appellation,
    vigneron?: string,
    vintage: number,
}

export const WINE_REGISTERED = "WINE_REGISTERED";
export const WINE_LOADED = "WINE_LOADED";

export type WineActionTypes =
    | { type: typeof WINE_REGISTERED, payload: { wine: Wine }, error: boolean, meta: any }
    | { type: typeof WINE_LOADED, payload: { wines: Wine[] }, error: boolean, meta: any }