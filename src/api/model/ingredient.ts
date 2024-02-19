import { IngredientCategory } from "../enum/ingredient-category";

export interface Ingredient {
    name: string,
    quantity: number,
    unit: string,
    category: IngredientCategory,
    is_optional?: boolean,
}
