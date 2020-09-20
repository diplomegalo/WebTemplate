import { combineReducers } from "redux";
import { modalReducer } from "./modal/reducers";

const rootReducer = combineReducers({
    modal: modalReducer,
});

export type RootState = ReturnType<typeof rootReducer>;
export default rootReducer;
