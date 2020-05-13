import React from "react";
import Container from "react-bootstrap/esm/Container";
import { hot } from "react-hot-loader/root";
import Nav from "react-bootstrap/esm/Nav";
import {
    BrowserRouter,
    Link,
    Switch,
    Route,
} from "react-router-dom";
import Home from "./Home";
import AddVegetable from "./AddVegetable";
import About from "./About";

const App = () => (
    <Container>
        <BrowserRouter>
            <Nav>
                <Nav.Item>
                    <Link className="nav-link" to="/">Home</Link>
                </Nav.Item>
                <Nav.Item>
                    <Link className="nav-link" to="/add-vegetable">Ajouter un ingredient</Link>
                </Nav.Item>
                <Nav.Item>
                    <Link className="nav-link" to="/about">About</Link>
                </Nav.Item>
            </Nav>

            <Switch>
                <Route path="/add-vegetable">
                    <AddVegetable />
                </Route>
                <Route path="/about">
                    <About />
                </Route>
                <Route path="/">
                    <Home />
                </Route>
            </Switch>
        </BrowserRouter>

    </Container>
);

export default hot(App);
