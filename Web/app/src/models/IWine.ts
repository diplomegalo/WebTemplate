import * as yup from "yup";

export interface IWine
{
    id: number | undefined,
    name: string,
    vineyard: number,
    appellation: number,
    vigneron: string,
    vintage: number,
}

export const registerWineSchema = yup.object({
    name: yup.string().required("Vous devez entrez le nom du vin."),
    vineyard: yup.number().min(1, "Vous devez entrez le nom du vignoble."),
    appellation: yup.number().min(1, "Vous devez entrez le nom de l'appellation."),
    vigneron: yup.string().nullable(),
    vintage: yup.number().min(new Date().getUTCFullYear() - 50, "Vous êtes sûr que votre vin est aussi vieux ?").max(new Date().getUTCFullYear(), "Mais c'est un vin du futur !"),
});
