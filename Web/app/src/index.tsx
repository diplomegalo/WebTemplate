import React from "react";
import ReactDOM from "react-dom";
import App from "components/App";

import "react-datepicker/dist/react-datepicker.css";
import "./styles/app.css";
import { BrowserRouter } from "react-router-dom";
import Container from "react-bootstrap/esm/Container";

require("react-datepicker/dist/react-datepicker.css");
require("./styles/app.css");


ReactDOM.render(
    <BrowserRouter>
        <Container>
            <App />
        </Container>
    </BrowserRouter>,
    document.getElementById("root"),
);

if (module.hot)
{
    module.hot.accept();
}
