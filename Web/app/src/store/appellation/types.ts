export type Appellation =
{
    id: number | undefined;
    name: string;
    vineyardId: number;
    description: string;
    label: number;
}

export const APPELLATION_LOADED = "APPELLATION_LOADED";

export type AppellationActionTypes =
    | { type: typeof APPELLATION_LOADED, payload: { appellations: Appellation[] }, error: boolean, meta: any };