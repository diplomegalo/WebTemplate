import { Action, Dispatch } from "redux";
import { AppellationApi } from "../../services/AppellationApi";
import { Appellation, APPELLATION_LOADED } from "./types";

export const appellationLoaded = (appellations: Appellation[]) => ({
    type: APPELLATION_LOADED,
    payload: { appellations },
    error: false,
    meta: undefined
});

export const loadAppellations = () =>
    (dispatch: Dispatch<Action>) => AppellationApi.instance().loadAppellation()
        .then((appellations) => dispatch(appellationLoaded(appellations)))
        .catch((err) =>
        {
            throw err;
        });