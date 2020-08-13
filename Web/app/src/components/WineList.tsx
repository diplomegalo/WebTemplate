import React from "react";
import WineService from "services/WineService";
import { IWine } from "models/IWine";

const WineList = () =>
{
    const [wines, setWines] = React.useState<IWine[]>([]);
    React.useEffect(() =>
    {
        WineService.listWine().then((result) => setWines(result));
    }, []);

    return (
        <ul className="table-fixed">
            {
                wines.map((wine, idx) => (
                    <li key={wine.id}>{ `${wine.name} - ${wine.vineyard} - ${wine.appellation} - ${wine.vintage}`}</li>
                ))
            }
        </ul>
    );
};

export default WineList;
