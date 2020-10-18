import { combineReducers } from "redux";
import { wineReducer } from "./wine/reducers";
import { vineyardReducer } from "./vineyard/reducers";
import { appellationReducer } from "./appellation/reducers";

const rootReducer = combineReducers({
    wines: wineReducer,
    vineyards: vineyardReducer,
    appellations: appellationReducer,
});

export type RootState = ReturnType<typeof rootReducer>;
export default rootReducer;
