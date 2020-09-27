export type WineState =
{
    id: number | undefined,
    name: string,
    vineyard: number,
    appellation: number,
    vigneron: string,
    vintage: number,
}

export const ADD_WINE = "ADD_WINE";
export const WINE_LOADED = "WINE_LOADED";
export const LOAD_WINE = "LOAD_WINE";

export type WineActionTypes =
    | { type: typeof ADD_WINE, payload: { wine: WineState }, error: boolean, meta: any }
    | { type: typeof LOAD_WINE, payload: { wine: WineState}, error: boolean, meta: any }
    | { type: typeof WINE_LOADED, payload: { wines: WineState[] }, error: boolean, meta: any }