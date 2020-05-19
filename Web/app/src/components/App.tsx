import React from "react";
import { hot } from "react-hot-loader/root";
import Nav from "react-bootstrap/esm/Nav";
import {
    Switch,
    Route,
    NavLink,
} from "react-router-dom";
import Vegetable from "components/Vegetable";
import Home from "./Home";
import About from "./About";
import NotFound from "./NotFound";

const App = () => (
    <>
        <Nav>
            <Nav.Item>
                <NavLink className="nav-link" activeClassName="active" exact to="/">Home</NavLink>
            </Nav.Item>
            <Nav.Item>
                <NavLink className="nav-link" activeClassName="active" to="vegetable">Vegetable</NavLink>
            </Nav.Item>
            <Nav.Item>
                <NavLink className="nav-link" activeClassName="active" to="about">About</NavLink>
            </Nav.Item>
        </Nav>

        <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/home" exact component={Home} />
            <Route path="/about" component={About} />
            <Route path="/vegetable" component={Vegetable} />
            <Route component={NotFound} />
        </Switch>
    </>
);

export default hot(App);
