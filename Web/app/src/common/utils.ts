export const toMap = <TKey, TValue>(items: any[], key: TKey, value: TValue): Map<TKey, TValue> =>
{
    const result: Map<TKey, TValue> = new Map();
    items.forEach((e) => result.set(e[key], e[value]));
    return result;
};