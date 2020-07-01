export default interface IAppellation
{
    id: number | undefined;
    name: string;
    vineyard: string;
    description: string;
    type: "IGP" | "AOC" | null;
};
