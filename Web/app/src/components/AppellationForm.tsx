import React from "react";
import Form from "react-bootstrap/esm/Form";
import Button from "react-bootstrap/esm/Button";
import IAppellation from "models/IAppellation";

export interface IAppellationProps
{
    appellation?: IAppellation;
}

const AppellationForm = (props: IAppellationProps) =>
{
    const { appellation } = props;

    return (
        <Form id="registerAppellation">
            <Form.Group>
                <Form.Label>Nom :</Form.Label>
                <Form.Control as="input" type="text" />
            </Form.Group>
            <Form.Group>
                <Form.Label htmlFor="vineyard">Vignoble :</Form.Label>
                <Form.Control as="select" id="vineyard">
                    <option>Vignoble</option>
                    <option value="1">Alsace</option>
                    <option value="2">Bordeaux</option>
                    <option value="3">Beaujolais</option>
                    <option value="4">Bourgogne</option>
                    <option value="5">Bugey</option>
                    <option value="6">Champagne</option>
                </Form.Control>
            </Form.Group>
            <Form.Group>
                <Form.Label htmlFor="description">Description :</Form.Label>
                <Form.Control as="textarea" />
            </Form.Group>
            <Form.Group>
                <Form.Label htmlFor="type">Type :</Form.Label>
                <Form.Control as="select" id="type">
                    <option>Vignoble</option>
                    <option value="1">AOC | AOP</option>
                    <option value="2">IGP</option>
                </Form.Control>
            </Form.Group>
            <Button type="submit">Ajouter</Button>
        </Form>
    );
};

export default AppellationForm;
