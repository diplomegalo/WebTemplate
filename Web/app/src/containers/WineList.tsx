import React from "react";
import { RootState } from "../store";
import { connect } from "react-redux";
import * as wineActions from "../store/wine/actions";
import * as appellationActions from "../store/appellation/actions";
import * as vineyardAction from "../store/vineyard/actions";
import { Action, bindActionCreators, Dispatch } from "redux";

const mapStateToProps = (state: RootState) => ({
    wines: state.wines.map(wine => ({
        ...wine,
        vineyard: state.vineyards.find(vineyard => vineyard.id === wine.vineyardId),
        appellation: state.appellations.find(appellation => appellation.id === wine.appellationId)
    })),
    appellations: state.appellations,
    vineyards: state.vineyards
});

const mapDispatchToProps = (dispatch: Dispatch<Action>) => ({
    actions: {
        loadWines: bindActionCreators(wineActions.loadWines, dispatch),
        loadAppellations: bindActionCreators(appellationActions.loadAppellations, dispatch),
        loadVineyards: bindActionCreators(vineyardAction.loadVineyards, dispatch)
    }
});

type mapStateToPropsType = ReturnType<typeof mapStateToProps>
type mapDispatchToPropsType = ReturnType<typeof mapDispatchToProps>
type WineProps = mapStateToPropsType & mapDispatchToPropsType;

const WineList = (props : WineProps) =>
{
    const { wines, appellations, vineyards, actions } = props;

    React.useEffect(() =>
    {
        actions.loadVineyards();
        actions.loadAppellations();
        actions.loadWines();
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
                        <div className="w-1/4">{wine.vineyard ? wine.vineyard.name : wine.vineyardId}</div>
                        <div className="w-1/4">{wine.appellation ? wine.appellation.name : wine.appellationId}</div>
                        <div className="w-1/4 text-center">{wine.vintage}</div>
                    </li>
                ))
            }
        </ul>
    );
};

export default connect(mapStateToProps, mapDispatchToProps)(WineList);
