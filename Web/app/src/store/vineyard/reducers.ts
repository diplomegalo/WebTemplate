import { Vineyard, VineyardActionTypes } from "./types";

const initialState: Vineyard[] = []
export const vineyardReducer = (state: Vineyard[] = initialState, action: VineyardActionTypes): Vineyard[] =>
{
    switch (action.type)
    {
        case "VINEYARD_LOADED":
            return [...action.payload.vineyards];
        default:
            return state;
    }
}