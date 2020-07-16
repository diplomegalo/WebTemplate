import * as yup from "yup";

export default interface IAppellation
{
    id: number | undefined;
    name: string;
    vineyard: number;
    description: string;
    label: number;
}

export const appellationSchema = yup.object({
    name: yup.string().required(),
    vineyard: yup.number().min(1),
    description: yup.string().nullable(),
    label: yup.number().min(1),
});
