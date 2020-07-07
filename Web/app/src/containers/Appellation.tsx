import React, { useEffect, useState } from "react";
import AppellationForm from "components/AppellationForm";

const Appellation = () =>
{
    return (
        <>
            <h2>Gestion des Appellations</h2>
            <h3>Ajouter une appellation:</h3>
            <AppellationForm />
        </>
    );
};

export default Appellation;
