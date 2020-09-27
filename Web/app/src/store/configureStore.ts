import { applyMiddleware, createStore } from "redux";
import rootReducer, { RootState } from "./index";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";

export default function configureStore(initialState?: RootState)
{
    return createStore(rootReducer, initialState, composeWithDevTools(applyMiddleware(thunk)));
}