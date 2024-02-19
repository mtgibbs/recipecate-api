const RECIPE_CENTERPIECE_TYPE = [
    'pork',
    'beef',
    'chicken',
    'vegetarian',
    'fish'
] as const;

type RecipeCenterpieceType = typeof RECIPE_CENTERPIECE_TYPE[number];

export { RECIPE_CENTERPIECE_TYPE, RecipeCenterpieceType };
