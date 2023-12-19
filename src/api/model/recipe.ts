import { Ingredient } from "./ingredient";

export interface RecipeRequest {
    name: string,
    ingredients: Ingredient[],
    instructions: string,
}

export interface Recipe extends RecipeRequest {
    id: string
}
