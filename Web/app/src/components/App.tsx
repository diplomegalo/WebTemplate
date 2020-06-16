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
        <Nav>
            <Nav.Item>
                <NavLink className="nav-link" activeClassName="active" exact to="/">Home</NavLink>
            </Nav.Item>
            <Nav.Item>
                <NavLink className="nav-link" activeClassName="active" to="appellation">Appellation</NavLink>
            </Nav.Item>
            <Nav.Item>
                <NavLink className="nav-link" activeClassName="active" to="about">About</NavLink>
            </Nav.Item>
        </Nav>
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
