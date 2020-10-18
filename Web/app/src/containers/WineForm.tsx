import React, { PureComponent } from "react";
import { Input, Select } from "containers/elements/Form";
import { useForm } from "react-hook-form";
import Button from "containers/elements/Button";
import { RootState } from "../store";
import { connect } from "react-redux";
import { Action, bindActionCreators, Dispatch } from "redux";
import * as yup from "yup";
import { loadVineyards } from "../store/vineyard/actions";
import { loadAppellations } from "../store/appellation/actions";
import { registerWine } from "../store/wine/actions";
import { Wine } from "../store/wine/types";
import { toMap } from "../common/utils";
import { ModalEventType } from "./elements/Modal";

type mapDispatchToPropsType = ReturnType<typeof mapDispatchToProps>;
type mapStateToPropsType = ReturnType<typeof mapStateToProps>;
type WinePropsType = {
    onCancel?: () => void,
    onSubmit?: () => void,
};

type WineProps = WinePropsType & mapStateToPropsType & mapDispatchToPropsType

export const registerWineSchema = yup.object({
    name: yup.string().required("Vous devez entrez le nom du vin."),
    vineyard: yup.number().min(1, "Vous devez entrez le nom du vignoble."),
    appellation: yup.number().min(1, "Vous devez entrez le nom de l'appellation."),
    vigneron: yup.string().nullable(),
    vintage: yup.number().min(new Date().getUTCFullYear() - 50, "Vous êtes sûr que votre vin est aussi vieux ?").max(new Date().getUTCFullYear(), "Mais c'est un vin du futur !"),
});

const WineForm = (props: WineProps) =>
{
    const {onCancel, onSubmit, vineyards, appellations, actions} = props;
    const {register, watch, errors, handleSubmit, reset} = useForm<Wine>({validationSchema: registerWineSchema});
    const [vintageOptions, _] = React.useState<string[]>(Array.from(Array(50), (_, i) => (new Date().getUTCFullYear() - i).toString()));
    const selectedVineyard: number = watch("vineyardId");
    const firstInput = React.useRef<HTMLInputElement | null>(null);

    React.useEffect(() =>
    {
        if (firstInput.current)
        {
            firstInput.current.focus();
        }

        document.addEventListener("keydown", (e) => e.key === "Enter" && handleSubmit(submit)());

        actions.loadVineyards();
        actions.loadAppellations();

        return () =>
        {
            reset();
            document.removeEventListener("keydown", (e) => e.key === "Enter" && handleSubmit(submit)());
        }
    }, []);

    const appellationSubset = toMap(appellations.filter((ap) => ap.vineyardId === selectedVineyard), "id", "name")

    const submit = (data: Wine) =>
    {
        if (onSubmit)
        {
            onSubmit()
        }
        actions.registerWine(data);
    };

    const handleCancel = () =>
    {
        reset();
        return !!onCancel && onCancel();
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
                    <Select label="Vignoble : " name="vineyard" options={toMap(vineyards, "id", "name")}
                            placeholder="Choisissez un vignoble..." ref={register} error={errors.vineyardId} />
                    <Select label="Appellation :" name="appellation" options={appellationSubset}
                            placeholder="Choisissez une appellation..." ref={register} error={errors.appellationId} />
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

const mapStateToProps = (state: RootState) => ({
    vineyards: state.vineyards,
    appellations: state.appellations
});

const mapDispatchToProps = (dispatch: Dispatch<Action>) => ({
    actions:
        {
            loadVineyards: bindActionCreators(loadVineyards, dispatch),
            loadAppellations: bindActionCreators(loadAppellations, dispatch),
            registerWine: bindActionCreators(registerWine, dispatch),
        }
});

export default connect(mapStateToProps, mapDispatchToProps)(WineForm);

export const withModal = <T extends WineProps>(WrappedComponent: React.ComponentType<T>) =>
    class WithModal extends React.Component<T & ModalEventType>
    {
        render()
        {
            return (
                <WrappedComponent {...this.props} onCancel={this.props.onCancel} onSubmit={this.props.onValidate} />);
        }
    };

export const WineFormModalChild = withModal(connect(mapStateToProps, mapDispatchToProps)(WineForm));
