import { combineReducers } from "redux";
import { modalReducer } from "./modal/reducers";
import { wineReducer } from "./wine/reducers";

const rootReducer = combineReducers({
    modal: modalReducer,
    wines: wineReducer,
});

export type RootState = ReturnType<typeof rootReducer>;
export default rootReducer;
