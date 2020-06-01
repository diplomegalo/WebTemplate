import React, { useState } from "react";
import Form from "react-bootstrap/esm/Form";

export interface IAppellationProps
{
    appellation: IAppellation;
    handleChange: (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => void
}

export interface IAppellation
{
    id?: number;
    name?: string;
    description?: string;
    type?: string;
}

const AppellationForm = (props: IAppellationProps) =>
{
    const { appellation } = props;
    const { handleChange } = props;
    const update = appellation.id !== undefined;

    return (
        <Form>
            <h2>{update ? `Update ${appellation.name}` : "Add Appellation"}</h2>
            <Form.Group>
                <Form.Label>
                    <Form.Control
                        type="text"
                        placeholder="Appellation"
                        value={appellation.name}
                        onChange={handleChange}
                    />
                </Form.Label>
            </Form.Group>
        </Form>
    );
};

const Appellation = () =>
{
    const [appellation, setAppellation] = useState<IAppellation>({
        id: null,
        name: "",
        description: "",
        type: null,
    });

    // eslint-disable-next-line max-len
    const handleChange = ({ target }: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => setAppellation({
        ...appellation,
        [target.name]: target.value,
    });

    return (<AppellationForm appellation={appellation} handleChange={handleChange} />);
};

export default Appellation;
