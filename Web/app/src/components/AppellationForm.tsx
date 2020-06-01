import React from "react";
import Form from "react-bootstrap/esm/Form";
import { IAppellation } from "models/IAppellation";

export interface IAppellationProps
{
    appellation: IAppellation;
    handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void
}

export const AppellationForm = (props: IAppellationProps) =>
{
    const { appellation } = props;
    const { handleChange } = props;
    const update = appellation.id !== null;

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
