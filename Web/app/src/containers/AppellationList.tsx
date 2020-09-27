import React from "react";
import IAppellation from "models/IAppellation";

export interface IAppellationListProps
{
    appellationList: IAppellation[];
}

export interface IAppellationRowProps
{
    appellation: IAppellation;
}

const AppellationRow = (props: IAppellationRowProps) =>
{
    const { appellation } = props;

    return (
        <tr>
            <td>{appellation.id}</td>
            <td>{appellation.name}</td>
            <td>{appellation.description}</td>
            <td>{appellation.label}</td>
        </tr>
    );
};

const AppellationList = (props: IAppellationListProps) =>
{
    const { appellationList } = props;

    return (
        <table>
            <thead>
                <tr>
                    <th>#</th>
                    <th>Nom</th>
                    <th>Description</th>
                    <th>Type</th>
                </tr>
            </thead>
            <tbody>
                { appellationList.map((e) => (
                    <AppellationRow key={e.id} appellation={e} />
                ))}
            </tbody>
        </table>
    );
};

export default AppellationList;