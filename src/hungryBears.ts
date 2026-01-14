type Bear = {
    name: string,
    hunger: number
}

export const hungryBears = (bears: Bear[]): String[] => {
    let average = bears.map(b => Math.max(b.hunger, 0)).reduce((prevVal, curVal) => { return prevVal + curVal }, 0) / (bears.length || 1);
    return bears.filter(b => b.hunger > average).map(b => b.name).sort((a: string, b: string) => a.localeCompare(b));
}