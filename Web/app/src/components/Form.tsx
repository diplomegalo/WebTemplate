import React, {DetailedHTMLProps, TextareaHTMLAttributes} from "react";
import {KeyValuePair} from "models/SharedTypes";
import {FieldError} from "react-hook-form";

type LabelProps =
    React.DetailedHTMLProps<React.LabelHTMLAttributes<HTMLLabelElement>, HTMLLabelElement>;

type InputProps =
    React.DetailedHTMLProps<React.InputHTMLAttributes<HTMLInputElement>, HTMLInputElement> & {
    label: string | undefined,
    error?: FieldError
}

type SelectProps =
    React.DetailedHTMLProps<React.SelectHTMLAttributes<HTMLSelectElement>, HTMLSelectElement> & {
    label: string,
    options: KeyValuePair[],
    error?: FieldError
}

const Error = (props: { error: FieldError | undefined }) =>
{
    const { error } = props;
    if (!error)
    {
        return <></>;
    }
    const {message} = error;
    return <span className="text-red-500 text-xs italic">{message}</span>;
};

const FormGroup = (props: React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>,
    HTMLDivElement>) =>
{
    const { children } = props;
    return (
        <div className="w-full px-3 my-3">{children}</div>
    );
};

export const Label = (props: LabelProps) =>
{
    const { htmlFor, children } = props;

    return (
        <label className="block text-xs w-full uppercase font-bold" htmlFor={htmlFor}>
            {children}
        </label>
    );
};

export const Input = React.forwardRef<HTMLInputElement, InputProps>((props, ref) =>
{
    const {
        label, name, id, placeholder, error,
    } = props;

    return (
        <FormGroup>
            <Label htmlFor={id}>{label}</Label>
            <input
                className="appearance-none block w-full text-gray-700 border border-red-500 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white"
                placeholder={placeholder}
                type="text"
                name={name}
                ref={ref}
                id={id}
            />
            <Error error={error} />
        </FormGroup>
    );
});

export const Select = React.forwardRef<HTMLSelectElement, SelectProps>((props, ref) =>
{
    const {
        label, options, id, name, error,
    } = props;

    return (
        <FormGroup>
            <div className="relative">
                <Label htmlFor={id}>{label}</Label>
                <select
                    className="block appearance-none w-full border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                    id={id}
                    name={name}
                    ref={ref}
                >
                    {
                        options.map((item, idx) => (
                            <option key={Object.keys(item)[0]} value={idx}>
                                {item[idx]}
                            </option>
                        ))
                    }
                </select>
                <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                    <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                        <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/>
                    </svg>
                </div>
            </div>
            <Error error={error} />
        </FormGroup>
    );
});

type TextAreaProps = DetailedHTMLProps<
    TextareaHTMLAttributes<HTMLTextAreaElement>,
    HTMLTextAreaElement> & {
    label: string
}

export const TextArea = React.forwardRef<HTMLTextAreaElement, TextAreaProps>((props, ref) =>
{
    const {
        id, name, label,
    } = props;

    return (
        <FormGroup>
            <Label htmlFor={id}>{label}</Label>
            <textarea
                className="w-full border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                id={id}
                name={name}
                ref={ref}
            />
        </FormGroup>
    );
});
