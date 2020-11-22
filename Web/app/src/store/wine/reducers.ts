import { WINE_REGISTERED, Wine, WINES_LOADED, WineActionTypes } from "./types";
import initialState from "../initialState";

export const wineReducer = (state: Wine[] = initialState.wines, action: WineActionTypes): Wine[] =>
{
    switch (action.type)
    {
        case WINE_REGISTERED:
            return [... state, { ...action.payload.wine }];
        case WINES_LOADED:
            return [...action.payload.wines]
        default:
            return state;
    }
}