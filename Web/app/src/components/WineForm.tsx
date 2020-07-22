import React from "react";
import { Input, Select, Submit } from "components/Form";
import WineService from "services/WineService";
import { KeyValuePair } from "models/SharedTypes";
import IAppellation from "../models/IAppellation";

const mapToKeyValuePair = (items: any[], key: string, value: string) => (
    items.map<KeyValuePair>((e) =>
    {
        const option: KeyValuePair = {};
        option[e[key]] = e[value];
        return option;
    })
);

const WineForm = () =>
{
    const [appellations, setAppellations] = React.useState<IAppellation[]>([]);
    const [appellationsOptions, setAppellationOptions] = React.useState<KeyValuePair[]>([]);
    const [vineyardsOptions, setVineyardsOptions] = React.useState<KeyValuePair[]>([]);

    React.useEffect(() =>
    {
        WineService.listAllVineyard().then((result) => setVineyardsOptions(mapToKeyValuePair(result, "id", "name")));
        WineService.listAllAppellation().then((result) =>
        {
            setAppellations(result);
        });
    }, []);

    const filterAppellations = (event: React.ChangeEvent<HTMLSelectElement>): void =>
    {
        setAppellationOptions(mapToKeyValuePair(appellations.filter((e) => e.vineyard === event.target.value), "id", "name"));
    };

    return (
        <div>
            <div className="flex">
                <Input label="Nom :" />
                <Select label="Vignoble : " options={vineyardsOptions} />
                <Select label="Appellation :" options={appellationsOptions} />
                <Input label="Vigneron :" />
            </div>
            <div className="block">
                <Submit />
            </div>
        </div>
    );
};

export default WineForm;
