const COOK_TYPES = [
    'pressure-cooker',
    'stovetop',
    'oven',
    'slow-cooker',
    'grill',
] as const;

type CookType = typeof COOK_TYPES[number];

export { COOK_TYPES, CookType };
