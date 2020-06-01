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

    // eslint-disable-next-line max-len
    const handleChange = ({ target }: React.ChangeEvent<HTMLInputElement>) => setAppellation((value) => ({
        ...value,
        [target.name]: target.value,
    }));

    return <AppellationForm appellation={appellation} handleChange={handleChange} />;
};

export default Appellation;
