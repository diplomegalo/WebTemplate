import React, { ButtonHTMLAttributes } from "react";
import { atom, useRecoilState } from "recoil/dist";

export const isModalOpen = atom<boolean>({
    key: "isModalOpen",
    default: false,
});

type ModalProps =
    {
        id: string,
        title: string,
        showFooter?: boolean,
        onClose?: () => void;
        onCancel?: () => boolean;
        onValidate?: () => void;
    };

type ButtonProps = React.DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement> & { variant?: "primary" | "secondary" };

export const Modal = (props: React.PropsWithChildren<ModalProps>) =>
{
    const {
        children, title, id, showFooter, onCancel,
    } = props;
    const [isOpen, setIsOpen] = useRecoilState(isModalOpen);

    const closeModal = () => setIsOpen(false);

    React.useEffect(() =>
    {
        const modal = document.getElementById(id);
        if (!modal)
        {
            throw Error(`Element with ${id} doesn't exist in the current document.`);
        }
        if (isOpen)
        {
            modal.style.display = "block";
            modal.setAttribute("aria-hidden", "false");
        }
        else
        {
            modal.style.display = "none";
            modal.setAttribute("aria-hidden", "true");
        }
    }, [isOpen]);

    const onClick = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) =>
    {
        const modal = document.getElementById(id);
        if (e.target === modal)
        {
            closeModal();
        }
    };

    const cancel = () =>
    {
        if (onCancel && !onCancel())
        {
            return;
        }
        closeModal();
    };

    const footer = () => (
        <div id="modal-footer" className="inline-block w-full">
            <Button variant="primary">Ok</Button>
            <Button variant="secondary" onClick={cancel}>Cancel</Button>
        </div>
    );

    return (
        <div
            id={id}
            onClick={onClick}
            className="hidden absolute left-0 top-0 w-full h-full z-40 overflow-auto bg-opacity-50 bg-gray-700"
            aria-hidden="true"
        >
            <div id="modal-content" className="bg-white mt-1/5 m-auto border w-screen md:w-5/6 lg:w-3/4 xl:w-1/2">
                <div id="modal-header" className="py-2 px-4 bg-gray-600 text-2xl text-white font-medium">
                    <span id="modal-title" key="modal-title mr-2" className="">{title}</span>
                    <span id="close" className="float-right cursor-pointer hover:text-gray-300" onClick={closeModal}>&times;</span>
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
