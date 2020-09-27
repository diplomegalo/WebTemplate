import React from "react";
import { RootState } from "../store";
import { connect } from "react-redux";
import * as wineActions   from "../store/wine/actions";
import { Action, bindActionCreators, Dispatch } from "redux";

const mapStateToProps = (state: RootState) => ({ wines: state.wines });
const mapDispatchToProps = (dispatch: Dispatch<Action>) => ({ actions: { loadWines: bindActionCreators(wineActions.loadWines, dispatch) } });

const WineList = (props : ReturnType<typeof mapStateToProps> & ReturnType<typeof mapDispatchToProps>) =>
{
    const { wines } = props;

    React.useEffect(() =>
    {
        props.actions.loadWines();
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

export default connect(mapStateToProps, mapDispatchToProps)(WineList);
