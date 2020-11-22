import { WINE_REGISTERED, Wine, WINES_LOADED, WINE_LOADED } from "./types";
import WineService from "../../services/WineService";
import { Action, Dispatch } from "redux";
import { MapDispatchToProps } from "react-redux";

const wineRegistered = (wine: Wine, method: "UPDATE" | "INSERT") => ({ type: WINE_REGISTERED, payload: { wine }, error: false, meta: method});
const winesLoaded = (wines: Wine[]) => ({ type: WINES_LOADED, payload: { wines }, error: false, meta: undefined });
const wineLoaded = (wines: Wine) => ({ type: WINE_LOADED, payload: { wines }, error: false, meta: undefined });

export const registerWine = (wine: Wine) =>
    (dispatch: Dispatch<Action>) => WineService.instance().registerWine(wine)
        .then((result) => dispatch(wineRegistered(result, result.id ? "UPDATE" : "INSERT")));

export const loadWine = (id: string) =>
    (dispatch: Dispatch<Action>) => WineService.instance().getWine(id)
        .then((result) => dispatch(wineLoaded(result)));

export const loadWines = () =>
    (dispatch: Dispatch<Action>) =>
        WineService.instance().listWine()
            .then((wines) => dispatch(winesLoaded(wines)))
            .catch((error) =>
            {
                throw error
            });

