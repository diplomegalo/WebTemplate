import { RootState } from "../../store";
import { Action, bindActionCreators, Dispatch } from "redux";
import * as modalActions from "../../store/modal/actions";
import { connect } from "react-redux";
import React from "react";
import Button from "../elements/Button";

type ModalProps =
    {
        id: string,
        title: string,
        showFooter?: boolean,
        onClose?: () => void;
        onCancel?: () => void;
        onValidate?: () => void;
        children: React.ReactNode;
    };

const mapStateToProps = (state: RootState) => ({isOpen: state.modal.isOpen});
const mapDispatchToProps = (dispatch: Dispatch<Action>) => ({actions: bindActionCreators(modalActions, dispatch)});

const Modal = (props: ModalProps & ReturnType<typeof mapStateToProps> & ReturnType<typeof mapDispatchToProps>) =>
{
    const {
        children, title, id, showFooter, onCancel, onClose, onValidate, isOpen, actions
    } = props;

    const escape = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => e.target === document.getElementById(id) && actions.closeModal(id, onClose);
    const close = () => actions.closeModal(id, onClose);
    const cancel = () => actions.cancelModal(id, onCancel);
    const validate = () => actions.validateModal(id, onValidate);
    const open = () => actions.openModal(id);

    const btnRef = React.useRef(null);

    React.useEffect(() =>
    {
        if(!!btnRef && !!btnRef.current)
        {
            // @ts-ignore
            btnRef.current.focus();
        }

        document.addEventListener("keydown", (e) => e.key === "Escape" && cancel());
        return () => document.removeEventListener("keydown", (e) => e.key === "Escape" && cancel());
    }, []);

    const footer = () => (
        <div id="modal-footer" className="inline-block w-full">
            <Button variant="primary" onClick={validate}>Ok</Button>
            <Button variant="secondary" onClick={cancel}>Cancel</Button>
        </div>
    );

    return (
        <>
            <button
                ref={btnRef}
                onClick={open}
                type="button"
                className="block m-auto w-full py-3 border bg-blue-400 rounded text-white"
            >
                <i className="fas fa-plus fa-2x" />
            </button>
            <div
                id={id}
                onClick={escape}
                className={`${isOpen ? "" : "hidden "}absolute left-0 top-0 w-full h-full z-40 overflow-auto bg-opacity-50 bg-gray-700`}
                aria-hidden="true"
            >
                <div id="modal-content" className="bg-white mt-1/5 m-auto border w-screen md:w-5/6 lg:w-3/4 xl:w-1/2">
                    <div id="modal-header" className="py-2 px-4 bg-gray-600 text-2xl text-white font-medium">
                        <span id="modal-title" key="modal-title" className="mr-2">{title}</span>
                        <span id="close" className="float-right cursor-pointer hover:text-gray-300" onClick={close}>&times;</span>
                    </div>
                    <div id="modal-body">
                        {children}
                    </div>
                    {
                        showFooter ? footer() : <></>
                    }
                </div>
            </div>
        </>
    );
};

export default connect(mapStateToProps, mapDispatchToProps)(Modal);
