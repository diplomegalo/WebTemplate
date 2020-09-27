import React from "react";
import { Input, Select } from "containers/Form";
import WineService from "services/WineService";
import { useForm } from "react-hook-form";
import IAppellation from "models/IAppellation";
import { IWine, registerWineSchema } from "models/IWine";
import { Button } from "containers/Element";
import { RootState } from "../store";
import { connect } from "react-redux";

const map = (items: any[], key: string, value: string) =>
{
    const result: Map<string, string> = new Map();
    items.forEach((e) => result.set(e[key], e[value]));
    return result;
};

type WineFormProp = {
    onCancel?: () => void,
    onSubmit?: () => void,
}

const modalStateToProps = (state: RootState) => ({ isOpen: state.modal.isOpen });

const WineForm = (props: WineFormProp & { isOpen: boolean }) =>
{
    const [appellations, setAppellations] = React.useState<IAppellation[]>([]);
    const [appellationsOptions, setAppellationOptions] = React.useState<Map<string, string>>(new Map());
    const [vineyardsOptions, setVineyardsOptions] = React.useState<Map<string, string>>(new Map());
    const [vintageOptions, _] = React.useState<string[]>(Array.from(Array(50), (_, i) => (new Date().getUTCFullYear() - i).toString()));

    const { onCancel, onSubmit, isOpen } = props;

    const {
        register, watch, errors, handleSubmit, reset,
    } = useForm<IWine>({ validationSchema: registerWineSchema });

    const selectedVineyard: number = watch("vineyard");

    const firstInput = React.useRef<HTMLInputElement | null>(null);

    React.useEffect(() =>
    {
        if (isOpen)
        {
            firstInput.current.focus();
            document.addEventListener("keydown", (e) => e.key === "Enter" && handleSubmit(submit)());

            WineService.listAllVineyard().then((result) => setVineyardsOptions(map(result, "id", "name")));
            WineService.listAllAppellation().then((result) => setAppellations(result));
        }
        else
        {
            return document.removeEventListener("keydown", (e) => e.key === "Enter" && handleSubmit(submit)());
        }
    }, [isOpen]);

    React.useEffect(() =>
    {
        if (selectedVineyard && selectedVineyard > 0)
        {
            setAppellationOptions(map(appellations.filter((ap) => ap.vineyardId === selectedVineyard), "id", "name"));
        }
    }, [selectedVineyard]);

    const submit = (data: IWine) =>
    {
        WineService.registerWine(data);
        !!onSubmit && onSubmit();
    };

    const handleCancel = () =>
    {
        reset();
        !!onCancel && onCancel();
    };

    return (
        <div>
            <form onSubmit={handleSubmit(submit)}>
                <div className="grid grid-rows-2 grid-flow-row gap-4 py-4">
                    <Input label="Nom :" name="name" error={errors.name} ref={(e: HTMLInputElement) =>
                    {
                        register(e);
                        firstInput.current = e;
                    }} />
                    <Input label="Vigneron :" name="vigneron" ref={register} error={errors.vigneron} />
                    <Select label="Vignoble : " name="vineyard" options={vineyardsOptions}
                            placeholder="Choisissez un vignoble..." ref={register} error={errors.vineyard} />
                    <Select label="Appellation :" name="appellation" options={appellationsOptions}
                            placeholder="Choisissez une appellation..." ref={register} error={errors.appellation} />
                    <Select label="Millésime :" name="vintage" options={vintageOptions} ref={register}
                            error={errors.vintage} />
                </div>
                <div className="inline-block w-full py-4">
                    <Button variant="primary">Ok</Button>
                    <Button variant="secondary" type="button" onClick={handleCancel}>Cancel</Button>
                </div>
            </form>
        </div>
    );
};

export default connect(modalStateToProps)(WineForm);
