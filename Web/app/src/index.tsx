import React from "react";
import ReactDOM from "react-dom";
import App from "components/App";

import "react-datepicker/dist/react-datepicker.css";
import "./styles/app.css";

ReactDOM.render(<App />, document.getElementById("root"));

if (module.hot)
{
    module.hot.accept();
}
