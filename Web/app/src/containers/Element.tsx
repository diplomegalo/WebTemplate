import React from "react";

type ModalProps =
    {
        id: string,
        title: string,
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
    isOpen: boolean
}

export const modalReducer = (state: ModalState, action: ModalAction): ModalState =>
{
    const modal = document.getElementById(action.modalId);
    if (!modal)
    {
        return state;
    }

    const closeModal = (): ModalState =>
    {
        console.log("close modal");
        modal.style.display = "none";
        modal.setAttribute("aria-hidden", "true");
        return {isOpen: false};
    };

    const openModal = (): ModalState =>
    {
        console.log("open modal");
        modal.style.display = "block";
        modal.setAttribute("aria-hidden", "false");
        return {isOpen: true};
    }

    const execute = (method: (() => void) | undefined): boolean =>
    {
        if(method)
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
        return execute(action.onValidate) ? closeModal() : state;

    case "CANCEL":
        return execute(action.onCancel) ? closeModal() : state;

    case "OPEN":
        return openModal();

    case "CLOSE":
        return execute(action.onClose) ? closeModal() : state;
    }
}

export const Modal = (props: React.PropsWithChildren<ModalProps>) =>
{
    const {
        children, title, id, showFooter, onCancel, onClose, onValidate
    } = props;


    const [_, dispatch] = React.useReducer(modalReducer, { isOpen: false })

    const close = () => dispatch({type: "CLOSE", modalId: id, onClose: onClose});
    const cancel = () => dispatch({type: "CANCEL", modalId: id, onCancel: onCancel});
    const validate = () => dispatch({type: "VALIDATE", modalId: id, onValidate: onValidate});

    const footer = () => (
        <div id="modal-footer" className="inline-block w-full">
            <Button variant="primary" onClick={validate}>Ok</Button>
            <Button variant="secondary" onClick={cancel}>Cancel</Button>
        </div>
    );


    return (
        <div
            id={id}
            onClick={close}
            className="hidden absolute left-0 top-0 w-full h-full z-40 overflow-auto bg-opacity-50 bg-gray-700"
            aria-hidden="true"
        >
            <div id="modal-content" className="bg-white mt-1/5 m-auto border w-screen md:w-5/6 lg:w-3/4 xl:w-1/2">
                <div id="modal-header" className="py-2 px-4 bg-gray-600 text-2xl text-white font-medium">
                    <span id="modal-title" key="modal-title mr-2" className="">{title}</span>
                    <span id="close" className="float-right cursor-pointer hover:text-gray-300" onClick={close}>&times;</span>
                </div>
                <div id="modal-body">
                    {children}
                </div>
                {
                    showFooter ? footer : <></>
                }
            </div>
        </div>
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
