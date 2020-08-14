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
            <li key="header" className="flex p-2 bg-gray-600 text-white text-xl text-center">
                <div className="w-1/4">Name</div>
                <div className="w-1/4">Vineyard</div>
                <div className="w-1/4">Appellation</div>
                <div className="w-1/4">Vintage</div>
            </li>
            {
                wines.map((wine, idx) => (
                    <li key={wine.id} className={`flex p-2 ${idx % 2 === 0 ? "bg-gray-200" : "bg-white"}`}>
                        <div className="w-1/4">{wine.name}</div>
                        <div className="w-1/4">{wine.vineyard}</div>
                        <div className="w-1/4">{wine.appellation}</div>
                        <div className="w-1/4 text-center">{wine.vintage}</div>
                    </li>
                ))
            }
        </ul>
    );
};

export default WineList;
