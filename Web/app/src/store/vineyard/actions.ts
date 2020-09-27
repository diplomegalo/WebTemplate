import { VineyardService } from "../../services/VineyardService";
import { VINEYARD_LOADED } from "./types";
import { Action, Dispatch } from "redux";

export const vineyardLoaded = (vineyards: VineyardService[]) => ({
    type: VINEYARD_LOADED,
    payload: { vineyards },
    error: false,
    meta: undefined
});

export const loadVineyards = () =>
    (dispatch: Dispatch<Action>) => VineyardService.listAllVineyard()
        .then((vineyards) => dispatch(vineyardLoaded(vineyards)))
        .catch((error) =>
        {
            throw error;
        })