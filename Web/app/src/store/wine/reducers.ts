import { ADD_WINE, WineState, WINE_LOADED, WineActionTypes } from "./types";

const initialState: WineState[] = [];
export const wineReducer = (state: WineState[] = initialState, action: WineActionTypes): WineState[] =>
{
    switch (action.type)
    {
        case ADD_WINE:
            return [... state, { ...action.payload.wine }];
        case WINE_LOADED:
            return [...action.payload.wines]
        default:
            return state;
    }
}