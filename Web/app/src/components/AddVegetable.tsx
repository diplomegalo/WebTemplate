import React from "react";
import Form from "react-bootstrap/esm/Form";
import Button from "react-bootstrap/esm/Button";
import Col from "react-bootstrap/esm/Col";
import DatePicker from "react-datepicker";
import Row from "react-bootstrap/esm/Row";

import "react-datepicker/dist/react-datepicker.css";

interface IVegetable {
    name: string;
    season: "Winter" | "Fall" | "Summer" | "Spring";
}

export default () => {
    const setDate = (date: Date | null) => console.log(date);

    return (
        <>
            <h2>Ajouter un nouveau légume</h2>
            <Form>
                <Form.Group>
                    <Form.Label>Nom :</Form.Label>
                    <Form.Control type="text" placeholder="Ex : Tomate" />
                </Form.Group>
                <Row>
                    <Col>
                        <Form.Group>
                            <Form.Label>Date de début :</Form.Label>
                            <DatePicker className="form-control" dateFormat="dd/MM/yyyy" selected={new Date()} onChange={setDate} />
                        </Form.Group>
                    </Col>
                    <Col>
                        <Form.Group>
                            <Form.Label>Date de fin : </Form.Label>
                            <DatePicker className="form-control" dateFormat="dd/MM/yyyy" selected={new Date()} onChange={setDate} />
                        </Form.Group>
                    </Col>
                    <Col>
                        <Form.Group>
                            <Form.Label>Saison :</Form.Label>
                            <Form.Control as="select" custom>
                                <option>Eté</option>
                                <option>Automne</option>
                                <option>Hiver</option>
                                <option>Printemps</option>
                            </Form.Control>
                        </Form.Group>
                    </Col>
                </Row>
                <Button variant="link">Annuler</Button>
                <Button variant="primary">Ajouter</Button>
            </Form>
        </>
    );
};
