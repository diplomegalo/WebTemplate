import { Appellation, APPELLATION_LOADED, AppellationActionTypes } from "./types";

const initialState: Appellation[] = [];
export const appellationReducer = (state: Appellation[] = initialState, action: AppellationActionTypes): Appellation[] =>
{
    switch (action.type)
    {
        case APPELLATION_LOADED:
            return action.payload.appellations;
        default:
            return state;
    }
};