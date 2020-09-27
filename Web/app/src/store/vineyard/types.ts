export type Vineyard = {
    id: number,
    name: string,
};

export const VINEYARD_LOADED = "VINEYARD_LOADED";

export type VineyardActionTypes =
    | { type: typeof VINEYARD_LOADED, payload: { vineyards: Vineyard[] }, error: boolean, match: any };
