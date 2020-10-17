import { Appellation, APPELLATION_LOADED, AppellationActionTypes } from "./types";
import initialState from "../initialState";

export const appellationReducer = (state: Appellation[] = initialState.appellations, action: AppellationActionTypes): Appellation[] =>
{
    switch (action.type)
    {
        case APPELLATION_LOADED:
            return action.payload.appellations;
        default:
            return state;
    }
};