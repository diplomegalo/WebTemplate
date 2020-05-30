import React from "react";
import ReactDOM from "react-dom";

import "react-datepicker/dist/react-datepicker.css";
import "./styles/app.css";
import Container from "react-bootstrap/esm/Container";
import App from "components/App";

require("react-datepicker/dist/react-datepicker.css");
require("./styles/app.css");


ReactDOM.render(
    <Container>
        <App />
    </Container>,
    document.getElementById("root"),
);

if (module.hot)
{
    module.hot.accept();
}
