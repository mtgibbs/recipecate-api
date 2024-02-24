import { Recipe } from "./recipe";

export interface RecipesResponse {
    totalCount: number;
    recipes: Recipe[];
}
