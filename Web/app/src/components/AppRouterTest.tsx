import React from "react";
import {
    BrowserRouter as Router,
    Link,
    Switch,
    Route,
} from "react-router-dom";
import Nav from "react-bootstrap/esm/Nav";
import RouteComponent from "components/RouteComponent";

export default function AppRouterTest()
{
    return (
        <Router>
            <Nav>
                <Link className="nav-link" to="test/lenom">This is the test link.</Link>
            </Nav>
            <Switch>
                <Route path="/test" exact>Test page</Route>
                <Route path="/test/:name"><RouteComponent /></Route>
                <Route><h1>No !</h1></Route>
            </Switch>
        </Router>
    );
}
