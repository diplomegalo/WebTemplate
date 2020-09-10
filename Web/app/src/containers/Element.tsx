import React from "react";

type ModalProps =
    {
        id: string,
        title: string,
        isOpen: boolean,
        showFooter?: boolean,
        onClose?: () => void;
        onCancel?: () => void;
        onValidate?: () => void;
    };

type ButtonProps =
    React.DetailedHTMLProps<React.ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>
    & { variant?: "primary" | "secondary" };

type ModalAction =
    | { type: "OPEN", modalId: string }
    | { type: "CLOSE", modalId: string, onClose?: () => void }
    | { type: "CANCEL", modalId: string, onCancel?: () => void }
    | { type: "VALIDATE", modalId: string, onValidate?: () => void };

type ModalState = {
    isOpen: boolean,
}

export const modalReducer = (state: ModalState, action: ModalAction): ModalState =>
{
    console.log(action, state);

    const execute = (method: (() => void) | undefined): boolean =>
    {
        if (method)
        {
            try
            {
                method();
            }
            catch (error)
            {
                return false;
            }
        }

        return true;
    }

    switch (action.type)
    {
    case "VALIDATE":
        return execute(action.onValidate) ? { isOpen: false } : state;

    case "CANCEL":
        return execute(action.onCancel) ? { isOpen: false} : state;

    case "OPEN":
        return { isOpen: true};

    case "CLOSE":
        return execute(action.onClose) ? { isOpen: false} : state;
    }
}

export const Modal = (props: React.PropsWithChildren<ModalProps>) =>
{
    const {
        children, title, id, showFooter, onCancel, onClose, onValidate, isOpen
    } = props;

    const [modal, dispatch] = React.useReducer(modalReducer, {isOpen: isOpen });

    const close = (e: React.BaseSyntheticEvent) =>
    {
        if(e.target !== document.getElementById(id) && e.target !== document.getElementById("close"))
        {
            return;
        }

        dispatch({type: "CLOSE", modalId: id, onClose: onClose});
    };

    const cancel = () => dispatch({type: "CANCEL", modalId: id, onCancel: onCancel});
    const validate = () => dispatch({type: "VALIDATE", modalId: id, onValidate: onValidate});
    const open = () => dispatch({ type: "OPEN", modalId: id });

    const footer = () => (
        <div id="modal-footer" className="inline-block w-full">
            <Button variant="primary" onClick={validate}>Ok</Button>
            <Button variant="secondary" onClick={cancel}>Cancel</Button>
        </div>
    );

    return (
        <>
            <button
                onClick={open}
                type="button"
                className="block m-auto w-full py-3 border bg-blue-400 rounded text-white"
            >
                <i className="fas fa-plus fa-2x" />
            </button>
            <div
                id={id}
                onClick={close}
                className={`${modal.isOpen ? "" : "hidden "}absolute left-0 top-0 w-full h-full z-40 overflow-auto bg-opacity-50 bg-gray-700`}
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

export const Button = (props: ButtonProps) =>
{
    const {
        variant, children, onClick, type,
    } = props;

    let className = "float-right w-20 px-2 py-3 mx-2 bg-gray-500 border rounded shadow-md text-white font-bold hover:bg-gray-400 focus:outline-none";

    if (variant === "secondary")
    {
        className = "float-right w-20 px-2 py-3 mx-2 bg-white border rounded shadow-md text-gray-600 font-bold hover:bg-gray-100 hover:text-gray-700 focus:outline-none";
    }

    return <button type={type} className={className} onClick={onClick}>{children}</button>;
};
