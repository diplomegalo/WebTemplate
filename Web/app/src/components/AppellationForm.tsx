import React, { useRef, useState } from "react";
import Form from "react-bootstrap/esm/Form";
import Button from "react-bootstrap/esm/Button";
import IAppellation from "models/IAppellation";
import InputText from "components/InputText";
import WineApi from "servicesApi/WineApi";

export interface IAppellationProps
{
    appellation: IAppellation;
    handleChange: (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => void;
}

const AppellationForm = (props: IAppellationProps) =>
{
    const {
        appellation,
        handleChange,
    } = props;

    const [isValid, setIsValid] = useState<boolean>(false);
    const [registered, setRegistered] = useState<boolean>(false);
    const [submit, setSubmit] = useState<boolean>(false);
    const formEl = useRef<HTMLFormElement>(null);

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) =>
    {
        setSubmit(true);

        e.preventDefault();
        e.stopPropagation();
        if (formEl == null || formEl.current == null || !formEl.current.checkValidity())
        {
            setSubmit(false);
        }
        else
        {
            setIsValid(true);
            WineApi.registerAppellation(appellation)
                .then((result: IAppellation) => setRegistered(true))
                .catch(() => setSubmit(false));
        }
    };

    return (
        <Form validated={isValid} onSubmit={handleSubmit} ref={formEl}>
            <InputText
                label="Appellation:"
                placeholder="Ex: Bordeaux"
                value={appellation.name}
                onChange={handleChange}
                name="name"
                error="Le nom de l'appellation est requise."
            />
            <Button type="submit" disabled={submit || registered}>Ajouter</Button>
        </Form>
    );
};

export default AppellationForm;
