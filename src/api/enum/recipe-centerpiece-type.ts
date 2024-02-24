const RECIPE_CENTERPIECE_TYPE = [
    'pork',
    'beef',
    'poultry',
    'vegetarian',
    'fish',
    'dessert',
] as const;

type RecipeCenterpieceType = typeof RECIPE_CENTERPIECE_TYPE[number];
export { RECIPE_CENTERPIECE_TYPE, RecipeCenterpieceType };
