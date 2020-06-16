export default interface IAppellation
{
    id: number | undefined;
    name: string;
    description: string;
    type: "IGP" | "AOC" | null;
};
