import IAppellation from "models/IAppellation";

export default class WineApi
{
    static registerAppellation(appellation: IAppellation): Promise<IAppellation>
    {
        return new Promise<IAppellation>((resolve, _) => resolve(appellation));
    }
}
