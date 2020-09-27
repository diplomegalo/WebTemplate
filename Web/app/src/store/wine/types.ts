export type Wine =
{
    id?: number,
    name: string,
    vineyard: number,
    appellation: number,
    vigneron?: string,
    vintage: number,
}

export const WINE_REGISTERED = "WINE_REGISTERED";
export const WINE_LOADED = "WINE_LOADED";

export type WineActionTypes =
    | { type: typeof WINE_REGISTERED, payload: { wine: Wine }, error: boolean, meta: any }
    | { type: typeof WINE_LOADED, payload: { wines: Wine[] }, error: boolean, meta: any }