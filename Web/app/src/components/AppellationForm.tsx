import React from "react";
import Form from "react-bootstrap/esm/Form";
import Button from "react-bootstrap/esm/Button";
import IAppellation from "models/IAppellation";
import { useForm } from "react-hook-form";
import * as yup from "yup";

export interface IAppellationProps
{
    appellation?: IAppellation;
}

const AppellationForm = (props: IAppellationProps) =>
{
    const appellationSchema = yup.object({
        name: yup.string().required(),
        vineyard: yup.number().min(1),
        description: yup.string().nullable(),
        type: yup.number().min(1),
    });

    const {
        register, handleSubmit, errors,
    } = useForm<IAppellation>({ validationSchema: appellationSchema });

    const submit = (data: any) => console.log(data);

    return (
        <Form id="registerAppellation" onSubmit={handleSubmit(submit)}>
            <Form.Group>
                <Form.Label>Nom :</Form.Label>
                <Form.Control as="input" type="text" name="name" ref={register} isInvalid={!!errors.name} />
            </Form.Group>
            <Form.Group>
                <Form.Label htmlFor="vineyard">Vignoble :</Form.Label>
                <Form.Control as="select" id="vineyard" name="vineyard" ref={register} isInvalid={!!errors.vineyard}>
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
                <Form.Control as="textarea" name="description" ref={register} isInvalid={!!errors.description} />
            </Form.Group>
            <Form.Group>
                <Form.Label htmlFor="type">Type :</Form.Label>
                <Form.Control as="select" id="type" name="type" ref={register} isInvalid={!!errors.type}>
                    <option>Type</option>
                    <option value="1">AOC | AOP</option>
                    <option value="2">IGP</option>
                </Form.Control>
            </Form.Group>
            <Form.Group>
                <Button type="submit">Ajouter</Button>
            </Form.Group>
        </Form>
    );
};

export default AppellationForm;
