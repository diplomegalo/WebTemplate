import { WINE_REGISTERED, Wine, WINE_LOADED, WineActionTypes } from "./types";

const initialState: Wine[] = [];
export const wineReducer = (state: Wine[] = initialState, action: WineActionTypes): Wine[] =>
{
    switch (action.type)
    {
        case WINE_REGISTERED:
            return [... state, { ...action.payload.wine }];
        case WINE_LOADED:
            return [...action.payload.wines]
        default:
            return state;
    }
}