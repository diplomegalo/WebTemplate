import React from "react";
import ReactDOM from "react-dom";

import App from "components/App";
import "./styles/app.css";

ReactDOM.render(
    <div className="container mx-auto">
        <App />
    </div>,
    document.getElementById("root"),
);

// eslint-disable-next-line no-undef
if (module.hot)
{
    // eslint-disable-next-line no-undef
    module.hot.accept();
}
