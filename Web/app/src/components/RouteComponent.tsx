import { useParams } from "react-router";
import React from "react";

export default function RouteComponent()
{
    const { name } = useParams();
    return (
        <h2>{`${name} !`}</h2>
    );
}
