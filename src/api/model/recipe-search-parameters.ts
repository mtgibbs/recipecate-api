import { RecipeCenterpieceType } from "../enum/recipe-centerpiece-type";
import { CookType } from "../enum/recipe-cook-type";

export interface RecipeSearchParameters {
    textSearch?: string;
    cookType?: CookType
    recipeCenterpieceType?: RecipeCenterpieceType;
    page?: number;
    pageSize?: number;
}
