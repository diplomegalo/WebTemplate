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
    name: yup.string().required(),
    vineyard: yup.number().min(1),
    appellation: yup.number().min(1),
    vigneron: yup.string().required(),
    vintage: yup.number().min(new Date().getUTCFullYear() - 50).max(new Date().getUTCFullYear()),
});
