import React from "react";
import WineList from "containers/WineList";
import { Modal, modalReducer } from "containers/Element";
import WineForm from "containers/WineForm";

type Action = { type: "ADD" }

const Home = () =>
{
    const [modalState, dispatch] = React.useReducer(modalReducer, { isOpen: false });
    const modalId = "add-wine-modal";

    const showModal = () => dispatch({ type: "OPEN", modalId });
    const hideModal = () =>
    {
        console.log("close", modalId)
        dispatch({type: "CLOSE", modalId: modalId});
    }

    return (
        <div>
            <div id="tools-bar" className="flex mb-4">
                <div className="w-4/5 bg-gray-200 mr-2 py-2">
                    <label className="px-2" htmlFor="search">Recherche :</label>
                    <input
                        id="search"
                        name="search"
                        type="text"
                        placeholder="blablabla..."
                        className="border shadow rounded px-2 py-2"
                    />
                </div>
                <div className="w-1/5">
                    <button
                        onClick={showModal}
                        type="button"
                        className="block m-auto w-full py-3 border bg-blue-400 rounded text-white"
                    >
                        <i className="fas fa-plus fa-2x" />
                    </button>
                </div>
            </div>
            <div id="data">
                <WineList />
            </div>
            <Modal title="Ajouter un vin à la cave" id="add-wine-modal">
                <WineForm onCancel={hideModal} onSubmit={hideModal} />
            </Modal>
        </div>
    );
};

export default Home;