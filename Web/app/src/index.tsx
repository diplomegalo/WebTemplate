import React from "react";
import ReactDOM from "react-dom";

import App from "containers/App";
import "./styles/app.css";

ReactDOM.render(
    <div className="container mx-auto">
        <App />
    </div>,
    document.getElementById("root"),
);

if (module.hot)
{
    module.hot.accept();
}
