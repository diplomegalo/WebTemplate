import React from "react";
import Form from "react-bootstrap/esm/Form";
import Button from "react-bootstrap/esm/Button";
import DatePicker from "react-datepicker";

interface IVegetable
{
    name: string;
    season: "Winter" | "Fall" | "Summer" | "Spring";
}

export default () => (
    <>
        <h2>Ajouter un nouveau légume</h2>
        <Form>
            <Form.Group>
                <Form.Label>Nom :</Form.Label>
                <Form.Control type="text" placeholder="Ex : Tomate" />
            </Form.Group>
            <Form.Group>
                <DatePicker onChange={(e) => console.log(e)} />
            </Form.Group>
            <Form.Group>
                <Form.Label>Saison :</Form.Label>
                <Form.Control as="select" custom>
                    <option>Eté</option>
                    <option>Automne</option>
                    <option>Hiver</option>
                    <option>Printemps</option>
                </Form.Control>
            </Form.Group>
            <Button variant="link">Annuler</Button>
            <Button variant="primary">Ajouter</Button>
        </Form>
    </>
);
