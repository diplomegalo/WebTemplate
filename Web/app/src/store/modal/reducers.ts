import { CANCEL, CLOSE, OPEN, VALIDATE, ModalActionTypes, Modal } from "./types";

const initialState: Modal = { isOpen: false }
export const modalReducer = (state: Modal = initialState, action: ModalActionTypes): Modal =>
{
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
        case VALIDATE:
            return execute(action.onValidate) ? {...state, isOpen: false} : state;

        case CANCEL:
            return execute(action.onCancel) ? {...state, isOpen: false} : state;

        case OPEN:
            return {...state, isOpen: true};

        case CLOSE:
            return execute(action.onClose) ? {...state, isOpen: false} : state;

        default :
            return state;
    }
}
