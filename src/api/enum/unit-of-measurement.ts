const UNITS_OF_MEASUREMENT = [
    'unit',
    'cup',
    'tsp',
    'tbs',
    'tbsp',
    'oz',
    'lb',
    'pint',
    'quart',
    'gallon',
    'g',
    'to taste',
] as const;

type UnitOfMeasurement = typeof UNITS_OF_MEASUREMENT[number];

export { UNITS_OF_MEASUREMENT, UnitOfMeasurement };
