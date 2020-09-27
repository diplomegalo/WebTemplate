import { ADD_WINE, WineState, WINE_LOADED, WineActionTypes } from "./types";
import WineService from "../../services/WineService";
import { Action, Dispatch } from "redux";

export const registerWine = (wine: WineState) => ({ type: ADD_WINE, payload: { wine }, error: false, meta: undefined });

export const loadWines = () =>
    (dispatch: Dispatch<Action>) => WineService.listWine()
        .then((wines) => dispatch(wineLoaded(wines)))
        .catch((error) =>
        {
            throw error
        });

const wineLoaded = (wines: WineState[]) => ({ type: WINE_LOADED, payload: { wines }, error: false, meta: undefined });
