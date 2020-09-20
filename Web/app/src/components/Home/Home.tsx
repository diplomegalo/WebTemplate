import React from "react";
import WineList from "containers/WineList";
import { Modal } from "../../containers/Element";
import WineForm from "../../containers/WineForm";
import { useDispatch } from "react-redux";
import { cancelModal, validateModal } from "../../store/modal/actions";

const Home = () =>
{
    const modalId = "add-wine-modal";

    const dispatch = useDispatch();
    const onFormCancel = () => dispatch(cancelModal(modalId));
    const onFormSubmit = () => dispatch(validateModal(modalId));

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
                    <Modal title="Ajouter un vin à la cave" id={modalId}>
                        <WineForm onCancel={onFormCancel} onSubmit={onFormSubmit} />
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