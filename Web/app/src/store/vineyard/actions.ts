import { VineyardService } from "../../services/VineyardService";
import { Vineyard, VINEYARD_LOADED } from "./types";
import { Action, Dispatch } from "redux";

export const vineyardLoaded = (vineyards: Vineyard[]) => ({
    type: VINEYARD_LOADED,
    payload: { vineyards },
    error: false,
    meta: undefined
});

export const loadVineyards = () =>
    (dispatch: Dispatch<Action>) => VineyardService.instance().listAllVineyard()
        .then((vineyards) => dispatch(vineyardLoaded(vineyards)))
        .catch((error) =>
        {
            throw error;
        })