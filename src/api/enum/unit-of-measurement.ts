const UNITS_OF_MEASUREMENT = [
    'unit',
    'cup',
    'tsp',
    'tbs',
    'oz',
    'lb',
    'pint',
    'quart',
    'gallon',
    'g'
] as const;

type UnitOfMeasurement = typeof UNITS_OF_MEASUREMENT[number];

export { UNITS_OF_MEASUREMENT, UnitOfMeasurement };
