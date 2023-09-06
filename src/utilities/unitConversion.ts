enum UnitConvert {
  cm = 2.54,
  ft = 0.3937, // in inch
  kg = 0.4535,
  lbs = 2.205,
}

export enum Units {
  cm = 'cm',
  ft = 'ft',
  kg = 'kg',
  lbs = 'lbs',
}

export function conversion(unit: Units, value: number): number {
  return UnitConvert[Units[unit]] * value;
}