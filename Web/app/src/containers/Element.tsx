import React from "react";
import { connect } from "react-redux";
import { RootState } from "../store";
import * as modalActions from "../store/modal/actions"
import { Action, bindActionCreators, Dispatch } from "redux";

type ButtonProps =
    React.DetailedHTMLProps<React.ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>
    & { variant?: "primary" | "secondary" };

type ModalProps =
    {
        id: string,
        title: string,
        showFooter?: boolean,
        onClose?: () => void;
        onCancel?: () => void;
        onValidate?: () => void;
    };

type ModalStateProps = { isOpen: boolean }
type ModalDispatchProps = ReturnType<typeof modalDispatchToProps>;

const modalStateToProps = (state: RootState) => ({isOpen: state.modal.isOpen});
const modalDispatchToProps = (dispatch: Dispatch<Action>) => ({actions: bindActionCreators(modalActions, dispatch)})
const connector = connect(modalStateToProps, modalDispatchToProps)

type ModalReduxProps = ModalProps & ModalStateProps & ModalDispatchProps;

export const Modal = connector((props: React.PropsWithChildren<ModalReduxProps>) =>
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
        btnRef.current.focus();
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
});

export const Button = (props: ButtonProps) =>
{
    const {
        variant, children, onClick, type,
    } = props;

    let className = "float-right w-20 px-2 py-3 mx-2 bg-gray-500 border rounded shadow-md text-white font-bold hover:bg-gray-400";

    if (variant === "secondary")
    {
        className = "float-right w-20 px-2 py-3 mx-2 bg-white border rounded shadow-md text-gray-600 font-bold hover:bg-gray-100 hover:text-gray-700";
    }

    return <button type={type} className={className} onClick={onClick}>{children}</button>;
};
