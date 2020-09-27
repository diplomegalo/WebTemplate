import { WINE_REGISTERED, Wine, WINE_LOADED, WineActionTypes } from "./types";
import WineService from "../../services/WineService";
import { Action, Dispatch } from "redux";

export const wineRegistered = (wine: Wine, method: "UPDATE" | "INSERT") => ({ type: WINE_REGISTERED, payload: { wine }, error: false, meta: method});

export const registerWine = (wine: Wine) =>
    (dispatch: Dispatch<Action>) => WineService.registerWine(wine)
        .then((wine) => dispatch(wineRegistered(wine, wine.id ? "UPDATE" : "INSERT")));

export const loadWines = () =>
    (dispatch: Dispatch<Action>) =>
        WineService.listWine()
            .then((wines) => dispatch(wineLoaded(wines)))
            .catch((error) =>
            {
                throw error
            });

const wineLoaded = (wines: Wine[]) => ({ type: WINE_LOADED, payload: { wines }, error: false, meta: undefined });
