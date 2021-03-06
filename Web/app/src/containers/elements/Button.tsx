import React from "react";

type ButtonProps =
    React.DetailedHTMLProps<React.ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>
    & { variant?: "primary" | "secondary" };

const Button = (props: ButtonProps) =>
{
    const {
        variant, children, onClick, type,
    } = props;

    let className = "float-right w-20 px-2 py-3 mx-2 bg-gray-500 border rounded shadow-md text-white font-bold hover:bg-gray-400";

    if (variant === "secondary")
    {
        className = "float-right w-20 px-2 py-3 mx-2 bg-white border rounded shadow-md text-gray-600 font-bold hover:bg-gray-100 hover:text-gray-700";
    }

    return (<button type={type} className={className} onClick={onClick}>{children}</button>);
};

export default Button;