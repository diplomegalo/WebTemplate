import React from "react";
import ReactDOM from "react-dom";

import Container from "react-bootstrap/esm/Container";
import App from "components/App";
import "./styles/app.css";

ReactDOM.render(
    <div className="inline">
        <App />
    </div>,
    document.getElementById("root"),
);

if (module.hot)
{
    module.hot.accept();
}
