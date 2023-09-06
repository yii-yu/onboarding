import { rulerInit } from './settings';
export function ucFirst(str: string): string {
    if (!str) return str;

    return str[0].toUpperCase() + str.slice(1);
}

export function lcFirst(str: string): string {
    if (!str) return str;

    return str[0].toLowerCase() + str.slice(1);
}
export const minOffset = (name: string, screenHeight: number, unit = '', gender = ''): number => {
    if (!unit || !gender) return rulerInit[name].value * rulerInit[name].stepPx - rulerInit[name].min * rulerInit[name].stepPx;
    else return (rulerInit[name][unit].offset + screenHeight / 2) - rulerInit[name][unit][gender].min * rulerInit[name][unit].stepPx;
}

export const maxOffset = (name: string, screenHeight: number, unit = '', gender = ''): number => {
    if (!unit || !gender) return rulerInit[name].value * rulerInit[name].stepPx - rulerInit[name].max * rulerInit[name].stepPx;
    else return (rulerInit[name][unit].offset + screenHeight / 2) - rulerInit[name][unit][gender].max * rulerInit[name][unit].stepPx;
}
export const offset = (name: string, nameValue: string, screenHeight: number, unit='', gender='' ): number => {
    if (!unit || !gender) return rulerInit[name].value * rulerInit[name].stepPx - rulerInit[name][nameValue] * rulerInit[name].stepPx;
    else return (rulerInit[name][unit].offset + screenHeight / 2) - rulerInit[name][unit][gender][nameValue] * rulerInit[name][unit].stepPx;
}

export const inchToFt = (inch: number): number[] => {
    const _ft = Math.trunc(inch / 12);
    const _inch = Math.round(inch % 12);
    return [_inch == 12 ? _ft + 1 : _ft, _inch == 12 ? 0 : _inch];
};

export const inchRound = (inch:number):number =>{
    const ft = inchToFt(inch);
    return ft[0]*12 + ft[1];
}
