export default interface IAppellation
{
    id: number | null;
    name: string;
    description: string;
    type: "IGP" | "AOC" | null;
}
