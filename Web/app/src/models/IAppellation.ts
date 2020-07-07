import * as yup from "yup";

export interface IKeyValuePair
{
    [key: number]: string
}

export default interface IAppellation
{
    id: number | undefined;
    name: string;
    vineyard: number;
    description: string;
    type: number;
}
