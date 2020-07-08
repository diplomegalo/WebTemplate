import React from "react";
import IAppellation, {appellationSchema, IKeyValuePair} from "models/IAppellation";
import {useForm} from "react-hook-form";

export interface IAppellationProps {
    appellation?: IAppellation;
}

const AppellationForm = (props: IAppellationProps) => {
    const {
        register, handleSubmit, errors,
    } = useForm<IAppellation>({validationSchema: appellationSchema});

    const vineyards: IKeyValuePair[] = [{0: "Vignoble"}, {1: "Alsace"}, {2: "Bordeaux"}, {3: "Beaujolais"}, {4: "Bourgogne"}];
    const labels: IKeyValuePair[] = [{0: "Label"}, {1: "AOP | AOC"}, {2: "IGP"}];

    const submit = (data: any) => console.log(data);

    return (
        <form id="registerAppellation" onSubmit={handleSubmit(submit)}>
            <div>
                <label htmlFor="name">Name :</label>
                <input type="text" id="name" name="name" ref={register} />
                {errors.name && <span>{errors.name.message}</span>}
            </div>
            <div>
                <label htmlFor="vineyard">Vignoble :</label>
                <select id="vineyard" name="vineyard" ref={register}>
                    {vineyards.map((item, idx) => <option key={Object.keys(item)[0]} value={idx}>{item[idx]}</option>)}
                </select>
                {errors.vineyard && <span>{errors.vineyard.message}</span>}
            </div>
            <div>
                <label htmlFor="description">Description :</label>
                <textarea id="description" name="description" ref={register} />
            </div>
            <div>
                <label htmlFor="label">Label :</label>
                <select id="label" name="label" ref={register}>
                    {labels.map((item, idx) => <option key={Object.keys(item)[0]} value={idx}>{item[idx]}</option>)}
                </select>
                {errors.label && <span>{errors.label.message}</span>}
            </div>
            <button type="submit">Ajouter</button>
        </form>
    );
};

export default AppellationForm;
