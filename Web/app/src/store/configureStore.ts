import { createStore } from "redux";
import rootReducer, { RootState } from "./index";
import { composeWithDevTools } from "redux-devtools-extension";

export default function configureStore(initialState?: RootState)
{
    return createStore(rootReducer, initialState, composeWithDevTools());
}