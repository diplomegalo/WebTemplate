import React from "react";
import Button from "../elements/Button";

export interface WithModalProps
{
    onCancel?: () => void,
    onValidate?: () => void
}

type ModalEventType = {
    onClose?: () => void;
    onCancel?: () => void;
    onValidate?: () => void;
};

type ModalPropsType = {
    id: string,
    title: string
    showFooter?: boolean,
    children: React.ReactElement;
} & ModalEventType;

export type ModalProps = ModalPropsType;

const Modal = (props: ModalProps) =>
{
    const {
        children, title, id, showFooter, onCancel, onClose, onValidate
    } = props;

    const [isOpen, setIsOpen] = React.useState<boolean>(false);

    const escape = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => e.target === document.getElementById(id) && setIsOpen(false);
    const close = () =>
    {
        if (onClose)
        {
            onClose();
        }
        setIsOpen(false);
    };
    const cancel = () =>
    {
        if (onCancel)
        {
            onCancel();
        }
        setIsOpen(false);
    }
    const validate = () =>
    {
        if (onValidate)
        {
            onValidate();
        }
        setIsOpen(false);
    }

    const open = () =>
    {
        setIsOpen(true);
    }

    const btnRef = React.useRef(null);

    React.useEffect(() =>
    {
        if (!!btnRef && !!btnRef.current)
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
                        <span id="close" className="float-right cursor-pointer hover:text-gray-300"
                              onClick={close}>&times;</span>
                    </div>
                    <div id="modal-body">
                        {isOpen && React.cloneElement(children, {onCancel: cancel, onValidate: validate})}
                    </div>
                    {
                        showFooter ? footer() : <></>
                    }
                </div>
            </div>
        </>
    );
};

export default Modal;
