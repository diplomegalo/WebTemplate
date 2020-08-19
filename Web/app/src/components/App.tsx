import React from "react";
import {
    BrowserRouter as Router,
    Switch,
    Route,
} from "react-router-dom";
import Home from "components/Home/Home";
import NotFound from "./NotFound";
import Header from "./Common/Header";

const App = () => (
    <Router>
        <Header />
        <main className="block">
            <Switch>
                <Route path="/" exact component={Home} />
                <Route path="/home" exact component={Home} />
                <Route component={NotFound} />
            </Switch>
        </main>
    </Router>
);

export default App;
