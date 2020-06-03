import React from "react";
import ReactDOM from "react-dom";

import Container from "react-bootstrap/esm/Container";
import App from "components/App";
import "./styles/app.css";

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
