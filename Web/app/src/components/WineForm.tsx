import React from "react";
import { Input, Select, Submit } from "components/Form";
import WineService from "services/WineService";
import { KeyValuePair } from "models/SharedTypes";
import { useForm } from "react-hook-form";
import IAppellation from "../models/IAppellation";
import { IWine } from "../models/IWine";

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

    const { register, watch } = useForm<IWine>();

    const selectedVineyard: number = watch("vineyard");

    React.useEffect(() =>
    {
        if (selectedVineyard)
        {
            setAppellationOptions(mapToKeyValuePair(appellations.filter((ap) => ap.vineyardId === selectedVineyard), "id", "name"));
        }
    }, [selectedVineyard]);

    React.useEffect(() =>
    {
        WineService.listAllVineyard().then((result) => setVineyardsOptions(mapToKeyValuePair(result, "id", "name")));
        WineService.listAllAppellation().then((result) => setAppellations(result));
    }, []);

    return (
        <div>
            <div className="flex">
                <Input label="Nom :" />
                <Select label="Vignoble : " name="vineyard" options={vineyardsOptions} ref={register} />
                <Select label="Appellation :" name="appellation" options={appellationsOptions} ref={register} />
                <Input label="Vigneron :" name="vigneron" ref={register} />
            </div>
            <div className="block">
                <Submit />
            </div>
        </div>
    );
};

export default WineForm;
