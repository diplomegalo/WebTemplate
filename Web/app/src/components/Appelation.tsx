export interface IAppellationProps
{
    appellation: IAppellation
}

export interface IAppellation
{
    id: number,
    name: string,
    description: string,
    otherAppellation: IAppellation[]
}

const Appelation = (props: IAppellationProps) =>
    (
        [appellation, setAppellation] = useState();
        <h2></h2>
        
    )