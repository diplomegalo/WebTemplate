import React from "react";
import { Input, Select, Submit } from "components/Form";
import WineService from "services/WineService";
import { KeyValuePair } from "models/SharedTypes";

const WineForm = () =>
{
    const [appellationOptions, setAppellationOptions] = React.useState<KeyValuePair[]>([]);

    React.useEffect(() =>
    {
        WineService.listAllAppellation()
            .then((result) =>
            {
                const options = result.map(({ vineyard, name, id }) =>
                {
                    const option = {};
                    option[id] = name;
                    return option;
                });
                setAppellationOptions(options);
            });
    }, []);

    return (
        <div>
            <div className="flex">
                <Input label="Nom :" />
                <Select label="Appellation :" options={appellationOptions} />
                <Input label="Vigneron :" />
            </div>
            <div className="block">
                <Submit />
            </div>
        </div>
    );
};

export default WineForm;
