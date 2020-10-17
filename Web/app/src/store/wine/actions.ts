import { WINE_REGISTERED, Wine, WINE_LOADED } from "./types";
import WineService from "../../services/WineService";
import { Action, Dispatch } from "redux";

export const wineRegistered = (wine: Wine, method: "UPDATE" | "INSERT") => ({ type: WINE_REGISTERED, payload: { wine }, error: false, meta: method});

export const registerWine = (wine: Wine) =>
    (dispatch: Dispatch<Action>) => WineService.instance().registerWine(wine)
        .then((result) => dispatch(wineRegistered(result, result.id ? "UPDATE" : "INSERT")));

export const loadWines = () =>
    (dispatch: Dispatch<Action>) =>
        WineService.instance().listWine()
            .then((wines) => dispatch(wineLoaded(wines)))
            .catch((error) =>
            {
                throw error
            });

const wineLoaded = (wines: Wine[]) => ({ type: WINE_LOADED, payload: { wines }, error: false, meta: undefined });
