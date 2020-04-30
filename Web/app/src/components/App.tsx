import React from "react";
import Home from "components/Home";
import Container from "react-bootstrap/esm/Container";
import { hot } from "react-hot-loader/root";
import Ingredients from "./Ingredients";

const getComponent = (pathname: string) => (pathname === "add-ingredient" ? <Ingredients /> : <Home />);

const App = () => (<Container>{getComponent(window.location.pathname)}</Container>);

export default hot(App);
