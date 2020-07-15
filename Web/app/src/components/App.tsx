import React from "react";
import Nav from "react-bootstrap/esm/Nav";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    NavLink,
} from "react-router-dom";
import Appellation from "containers/Appellation";
import Home from "./Home";
import About from "./About";
import NotFound from "./NotFound";

const App = () => (
    <Router>
        <ul className="flex">
            <li className="mr-6">
                <NavLink className="text-blue-500 hover:text-blue-800" activeClassName="active" exact to="/">Home</NavLink>
            </li>
            <li className="mr-6">
                <NavLink className="text-blue-500 hover:text-blue-800" activeClassName="active" to="appellation">Appellation</NavLink>
            </li>
            <li className="mr-6">
                <NavLink className="text-blue-500 hover:text-blue-800" activeClassName="active" to="about">About</NavLink>
            </li>
        </ul>
        <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/home" exact component={Home} />
            <Route path="/about" component={About} />
            <Route path="/appellation" component={Appellation} />
            <Route component={NotFound} />
        </Switch>
    </Router>
);

export default App;
