import React from "react";
import Form from "react-bootstrap/esm/Form";

export interface IInputTextProps
{
    label: string;
    name: string;
    value: string;
    placeholder: string;
    onChange: (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => void,
    error: string
}

const InputText = (props: IInputTextProps) =>
{
    const {
        label,
        name,
        value,
        placeholder,
        onChange,
        error,
    } = props;
    return (
        <Form.Group>
            <Form.Label>{label}</Form.Label>
            <Form.Control
                required
                type="text"
                placeholder={placeholder}
                value={value}
                name={name}
                onChange={onChange}
            />
            <Form.Control.Feedback type="invalid">{error}</Form.Control.Feedback>
        </Form.Group>
    );
};

export default InputText;
