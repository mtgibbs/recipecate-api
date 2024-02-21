import { RecipeCenterpieceType } from "../enum/recipe-centerpiece-type";
import { CookType } from "../enum/recipe-cook-type";
import { Ingredient } from "./ingredient";

export interface RecipeRequest {
    name: string,
    ingredients: Ingredient[],
    instructions: string,
    cookType?: CookType,
    totalTimeMinutes?: number,
    recipeCenterpieceType?: RecipeCenterpieceType,
}

export interface Recipe extends RecipeRequest {
    id: string
}
