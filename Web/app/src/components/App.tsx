import React from "react";
import Container from "react-bootstrap/esm/Container";
import { hot } from "react-hot-loader/root";
import AddVegetable from "components/AddVegetable";
import Home from "components/Home";
import About from "./About";

const getComponent = (pathname: string) =>
{
    if (pathname === "/add-ingredient")
    {
        return <AddVegetable />;
    }

    if (pathname === "/about")
    {
        return <About />;
    }

    return <Home />;
};

const App = () => (<Container>{getComponent(window.location.pathname)}</Container>);

export default hot(App);
