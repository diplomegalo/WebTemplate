import React from "react";
import Container from "react-bootstrap/esm/Container";
import { hot } from "react-hot-loader/root";
import AddVegetable from "components/AddVegetable";

const getComponent = (pathname: string) => (pathname === "add-ingredient" ? <AddVegetable /> : <AddVegetable />);

const App = () => (<Container>{getComponent(window.location.pathname)}</Container>);

export default hot(App);
