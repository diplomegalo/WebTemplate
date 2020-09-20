import React from "react";
import ReactDOM from "react-dom";
import App from "components/App";
import "./styles/app.css";
import { Provider as ReduxProvider } from "react-redux";
import configureStore from "./store/configureStore";

const store = configureStore();

ReactDOM.render(
    <ReduxProvider store={store}>
        <div className="container mx-auto">
            <App />
        </div>
    </ReduxProvider>,
    document.getElementById("root"),
);

// eslint-disable-next-line no-undef
if (module.hot)
{
    // eslint-disable-next-line no-undef
    module.hot.accept();
}
