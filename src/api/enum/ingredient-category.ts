const INGREDIENT_CATEGORY = [
    'dry goods',
    'dairy',
    'produce',
    'meat',
    'other'
] as const;

type IngredientCategory = typeof INGREDIENT_CATEGORY[number];

export { INGREDIENT_CATEGORY, IngredientCategory };
