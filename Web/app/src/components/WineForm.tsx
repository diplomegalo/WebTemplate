import React from "react";
import { Input, Select, Submit } from "components/Form";
import WineService from "services/WineService";
import { useForm } from "react-hook-form";
import IAppellation from "../models/IAppellation";
import { IWine, registerWineSchema } from "../models/IWine";

const map = (items: any[], key: string, value: string) =>
{
    const result: Map<string, string> = new Map();
    items.forEach((e) => result.set(e[key], e[value]));
    return result;
};

const WineForm = () =>
{
    const currentYear: number = new Date().getUTCFullYear();
    const [appellations, setAppellations] = React.useState<IAppellation[]>([]);
    const [appellationsOptions, setAppellationOptions] = React.useState<Map<string, string>>(new Map());
    const [vineyardsOptions, setVineyardsOptions] = React.useState<Map<string, string>>(new Map());
    const [vintageOptions, setVintageOptions] = React.useState<string[]>(Array.from(Array(50), (_, i) => (currentYear - i).toString()));

    const {
        register, watch, errors, handleSubmit,
    } = useForm<IWine>({ validationSchema: registerWineSchema });

    const selectedVineyard: number = watch("vineyard");

    React.useEffect(() =>
    {
        if (selectedVineyard && selectedVineyard > 0)
        {
            setAppellationOptions(map(appellations.filter((ap) => ap.vineyardId === selectedVineyard), "id", "name"));
        }
    }, [selectedVineyard]);

    React.useEffect(() =>
    {
        WineService.listAllVineyard().then((result) => setVineyardsOptions(map(result, "id", "name")));
        WineService.listAllAppellation().then((result) => setAppellations(result));
    }, []);

    const submit = (data: IWine) => console.log(data);

    return (
        <form onSubmit={handleSubmit(submit)}>
            <div className="flex">
                <Input label="Nom :" name="name" ref={register} error={errors.name} />
                <Select label="Vignoble : " name="vineyard" options={vineyardsOptions} placeholder="Choisissez un vignoble..." ref={register} error={errors.vineyard} />
                <Select label="Appellation :" name="appellation" options={appellationsOptions} placeholder="Choisissez une appellation..." ref={register} error={errors.appellation} />
                <Input label="Vigneron :" name="vigneron" ref={register} error={errors.vigneron} />
                <Select label="Millésime :" name="vintage" options={vintageOptions} ref={register} error={errors.vintage} />
            </div>
            <div className="block">
                <Submit />
            </div>
        </form>
    );
};

export default WineForm;
