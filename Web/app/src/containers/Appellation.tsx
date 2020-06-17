import React, { useEffect, useState } from "react";
import IAppellation from "models/IAppellation";
import AppellationForm from "components/AppellationForm";
import AppellationList from "components/AppellationList";
import WineServiceApi from "servicesApi/WineServiceApi";

const Appellation = () =>
{
    const [appellationList, setAppellationList] = useState<IAppellation[]>([]);

    const [appellation, setAppellation] = useState<IAppellation>({
        id: undefined,
        name: "",
        description: "",
        type: null,
    });

    // Init list of appellations.
    useEffect(() =>
    {
        WineServiceApi.listAllAppellation()
            .then((result: IAppellation[]) => setAppellationList(result));
    }, []);

    const handleChange = ({ target }: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) =>
    {
        setAppellation((value) => ({ ...value, [target.name]: target.value }));
    };

    return (
        <>
            <h2>Gestion des Appellations</h2>
            <h3>Liste des opérations:</h3>
            <AppellationList appellationList={appellationList} />
            <h3>Ajouter une appellation:</h3>
            <AppellationForm
                appellation={appellation}
                handleChange={handleChange}
            />
        </>
    );
};

export default Appellation;
