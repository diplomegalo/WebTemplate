import React from "react";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    NavLink,
} from "react-router-dom";
import Home from "./Home";
import NotFound from "./NotFound";

export default () => (
    <Router>
        <header>
            <ul className="block bg-gray-200 p-4 mb-5">
                <li className="mr-6">
                    <NavLink className="text-blue-500 hover:text-blue-800" activeClassName="active" exact to="/">Home</NavLink>
                </li>
            </ul>
        </header>

        <main className="block">
            <Switch>
                <Route path="/" exact component={Home} />
                <Route path="/home" exact component={Home} />
                <Route component={NotFound} />
            </Switch>
        </main>
    </Router>
);
