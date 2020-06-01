import React, { useState } from "react";
import { IAppellation } from "models/IAppellation";
import { AppellationForm } from "components/AppellationForm";

const Appellation = () =>
{
    const [appellation, setAppellation] = useState<IAppellation>({
        id: null,
        name: "",
        description: "",
        type: null,
    });

    const [isValid, setIsValid] = useState<boolean>(false);

    const handleChange = ({ target }: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) =>
    {
        setAppellation((value) => ({ ...value, [target.name]: target.value }));
    };

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) =>
    {
        const { form } = e.currentTarget;
        if (form.checkValidity() === false)
        {
            e.preventDefault();
            e.stopPropagation();
        }
        else
        {
            setIsValid(true);
        }
    };

    return (
        <>
            <h2>Gestion des Appellations</h2>
            <AppellationForm
                appellation={appellation}
                handleChange={handleChange}
                handleSubmit={handleSubmit}
                isValid={isValid}
            />
        </>
    );
};

export default Appellation;
