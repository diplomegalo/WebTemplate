import React from "react";
import Form from "react-bootstrap/esm/Form";
import Button from "react-bootstrap/esm/Button";
import { IAppellation } from "models/IAppellation";

export interface IAppellationProps
{
    appellation: IAppellation;
    handleChange: (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => void;
    handleSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
    isValid: boolean;
}

export const AppellationForm = (props: IAppellationProps) =>
{
    const {
        appellation,
        handleChange,
        handleSubmit,
        isValid,
    } = props;

    return (
        <Form validated={isValid} onSubmit={handleSubmit}>
            <Input
                placeholder="Ex: Bordeaux"
                value={appellation.name}
                onChange={handleChange}
                name="name"
                error="Le nom de l'appellation est requise."
            />
            <Button type="submit">Ajouter</Button>
        </Form>
    );
};

// eslint-disable-next-line max-len
const Input = (props: { placeholder: string; value: string; name: string; onChange: (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => void, error: string }) =>
{
    const {
        placeholder,
        value,
        name,
        onChange,
        error,
    } = props;
    return (
        <Form.Group>
            <Form.Label>Appellation:</Form.Label>
            <Form.Control
                required
                type="text"
                placeholder={placeholder}
                value={value}
                name={name}
                onChange={onChange}
            />
            <Form.Control.Feedback type="invalid">{error}</Form.Control.Feedback>
        </Form.Group>
    );
};
