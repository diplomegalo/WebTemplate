import React from "react";
import IAppellation, { appellationSchema } from "models/IAppellation";
import { useForm } from "react-hook-form";
import { Input, Label, Select, TextArea } from "components/Form";
import { KeyValuePair } from "models/SharedTypes";

export interface IAppellationProps {
    appellation?: IAppellation;
}

const AppellationForm = (props: IAppellationProps) =>
{
    const {
        register, handleSubmit, errors,
    } = useForm<IAppellation>({ validationSchema: appellationSchema });

    const vineyards: KeyValuePair[] = [{ 0: "Vignoble" }, { 1: "Alsace" }, { 2: "Bordeaux" }, { 3: "Beaujolais" }, { 4: "Bourgogne" }];
    const labels: KeyValuePair[] = [{ 0: "Label" }, { 1: "AOP | AOC" }, { 2: "IGP" }];

    const submit = (data: any) => console.log(data);

    return (
        <form id="registerAppellation" onSubmit={handleSubmit(submit)}>
            <div className="flex">
                <Input label="Name :" id="name" name="name" ref={register} placeholder="Ex: Saint Emilion" error={errors.name} />
                <Select label="Vignoble :" options={vineyards} id="vineyards" name="vineyard" ref={register} error={errors.vineyard} />
                <Select label="Label :" options={labels} id="label" name="label" ref={register} error={errors.label} />
            </div>
            <div className="flex">
                <TextArea id="description" name="description" label="description" />
            </div>
            <div className="block">
                <div className="m-3 float-right">
                    <button
                        type="submit"
                        className="shadow bg-purple-500 hover:bg-purple-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded"
                    >
                        Ajouter
                    </button>
                </div>
            </div>
        </form>
    );
};

export default AppellationForm;
