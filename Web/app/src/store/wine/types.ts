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

export type WineActionTypes =
    | { type: typeof ADD_WINE, payload: any, erros: any, meta: any }