import React from "react";
import {
    BrowserRouter as Router,
    Switch,
    Route,
} from "react-router-dom";
import Home from "components/Home/Home";
import NotFound from "./NotFound";
import Header from "./Common/Header";
import Wine from "./Wine/Wine";

const App = () => (
    <Router>
        <Header />
        <main className="block">
            <Switch>
                <Route path="/" exact component={Home} />
                <Route path="/home" component={Home} />
                <Route path="/wine/:id" component={Wine} />
                <Route path="/wine" component={Wine} />
                <Route component={NotFound} />
            </Switch>
        </main>
    </Router>
);

export default App;