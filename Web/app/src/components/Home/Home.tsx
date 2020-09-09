import React from "react";
import WineList from "containers/WineList";
import { Modal, modalReducer } from "containers/Element";
import WineForm from "containers/WineForm";

const Home = () =>
{
    const [modal, dispatch] = React.useReducer(modalReducer, { isOpen: false });

    const modalId = "add-wine-modal";
    const cancelModal = () => dispatch({type: "CANCEL", modalId: modalId});
    const validateModal = () => dispatch({type: "VALIDATE", modalId: modalId});

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
                    <Modal title="Ajouter un vin à la cave" id={modalId} isOpen={modal.isOpen}>
                        <WineForm onCancel={cancelModal} onSubmit={validateModal} />
                    </Modal>
                </div>
            </div>
            <div id="data">
                <WineList />
            </div>
        </div>
    );
};

export default Home;