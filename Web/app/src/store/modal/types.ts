export type ModalState = {
    isOpen: boolean
}

export const OPEN = "OPEN";
export const CLOSE = "CLOSE";
export const CANCEL = "CANCEL";
export const VALIDATE = "VALIDATE";

export type ModalActionTypes =
    | { type: typeof OPEN, modalId: string }
    | { type: typeof CLOSE, modalId: string, onClose?: () => void }
    | { type: typeof CANCEL, modalId: string, onCancel?: () => void }
    | { type: typeof VALIDATE, modalId: string, onValidate?: () => void };