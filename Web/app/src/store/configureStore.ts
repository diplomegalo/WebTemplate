import { createStore } from "redux";
import rootReducer, { RootState } from "./index";

export default function configureStore(initialState?: RootState)
{
    return createStore(rootReducer, initialState);
}