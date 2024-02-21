import { IngredientCategory } from "../enum/ingredient-category";

export interface Ingredient {
    name: string,
    quantity: number,
    unit: string,
    is_optional?: boolean,
}
