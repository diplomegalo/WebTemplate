import React from "react";
import { connect } from "react-redux";
import { RootState } from "../store";
import * as modalActions from "../store/modal/actions"
import { Action, bindActionCreators, Dispatch } from "redux";

type ButtonProps =
    React.DetailedHTMLProps<React.ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>
    & { variant?: "primary" | "secondary" };


export const Button = (props: ButtonProps) =>
{
    const {
        variant, children, onClick, type,
    } = props;

    let className = "float-right w-20 px-2 py-3 mx-2 bg-gray-500 border rounded shadow-md text-white font-bold hover:bg-gray-400";

    if (variant === "secondary")
    {
        className = "float-right w-20 px-2 py-3 mx-2 bg-white border rounded shadow-md text-gray-600 font-bold hover:bg-gray-100 hover:text-gray-700";
    }

    return <button type={type} className={className} onClick={onClick}>{children}</button>;
};
