import React from "react";
import { atom, useRecoilState } from "recoil/dist";

export const isModalOpen = atom<boolean>({
    key: "isModalOpen",
    default: false,
});

type ModalProps =
    {
        id: string,
        title: string,
    }

export const Modal = (props: React.PropsWithChildren<ModalProps>) =>
{
    const { children, title, id } = props;
    const [isOpen, setIsOpen] = useRecoilState(isModalOpen);

    React.useEffect(() =>
    {
        const modal = document.getElementById(id);
        if (!modal)
        {
            throw Error(`Element with ${id} doesn't exist in the current document.`);
        }
        if (isOpen)
        {
            modal.style.display = "table";
            window.onclick = function (event: MouseEvent)
            {
                const tmp = document.getElementById(id);
                if (event.target == tmp)
                {
                    tmp.style.display = "none";
                }
            };
        }
        else
        {
            modal.style.display = "none";
            window.onclick = null;
        }
    }, [isOpen]);

    return (
        <div id={id} className="table hidden absolute left-0 top-0 w-full h-full z-40 overflow-auto bg-opacity-50 bg-gray-700">
            <div className="table-cell align-middle bg-red-500">
                <div id="modal-content" className="bg-white m-auto border w-screen md:w-5/6 lg:w-3/4 xl:w-4/6">
                    <div id="modal-header" className="p-2 bg-blue-100 text-2xl font-medium">
                        {title}
                    </div>
                    <div id="modal-body" className="p-2">
                        {children}
                    </div>
                </div>
            </div>
        </div>
    );
};
