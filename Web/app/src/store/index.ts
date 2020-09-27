import { combineReducers } from "redux";
import { modalReducer } from "./modal/reducers";
import { wineReducer } from "./wine/reducers";
import { vineyardReducer } from "./vineyard/reducers";
import { appellationReducer } from "./appellation/reducers";

const rootReducer = combineReducers({
    modal: modalReducer,
    wines: wineReducer,
    vineyards: vineyardReducer,
    appellations: appellationReducer,
});

export type RootState = ReturnType<typeof rootReducer>;
export default rootReducer;
