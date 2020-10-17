import { Vineyard, VineyardActionTypes } from "./types";
import initialState from "../initialState";

export const vineyardReducer = (state: Vineyard[] = initialState.vineyards, action: VineyardActionTypes): Vineyard[] =>
{
    switch (action.type)
    {
        case "VINEYARD_LOADED":
            return [...action.payload.vineyards];
        default:
            return state;
    }
}