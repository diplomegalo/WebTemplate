import { CANCEL, CLOSE, ModalActionTypes, OPEN, VALIDATE } from "./types";

export const openModal = (modalId: string): ModalActionTypes => ({type: OPEN, modalId});
export const closeModal = (modalId: string, onClose?: () => void): ModalActionTypes => ({
    type: CLOSE,
    modalId: modalId,
    onClose: onClose
})
export const cancelModal = (modalId: string, onCancel?: () => void): ModalActionTypes => ({
    type: CANCEL,
    modalId: modalId,
    onCancel
})
export const validateModal = (modalId: string, onValidate?: () => void): ModalActionTypes => ({
    type: VALIDATE,
    modalId: modalId,
    onValidate: onValidate
})
