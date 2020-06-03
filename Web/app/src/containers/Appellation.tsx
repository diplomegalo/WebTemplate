import React, { useState } from "react";
import IAppellation from "models/IAppellation";
import AppellationForm from "components/AppellationForm";

const Appellation = () =>
{
    const [appellation, setAppellation] = useState<IAppellation>({
        id: null,
        name: "",
        description: "",
        type: null,
    });

    const handleChange = ({ target }: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) =>
    {
        setAppellation((value) => ({ ...value, [target.name]: target.value }));
    };

    return (
        <>
            <h2>Gestion des Appellations PLop</h2>
            <AppellationForm
                appellation={appellation}
                handleChange={handleChange}
            />
        </>
    );
};

export default Appellation;
