import { Get, Post, Put, Delete, Route, Tags, Query, Controller, Response, Body } from 'tsoa';
import { RecipeService } from '../services/recipe.service';
import { Recipe } from '../model/recipe';
import { Ingredient } from '../model/ingredient';
import { ApiError } from '../../error/api-error';
import { NotFoundError } from '../../error/404-not-found-error';
import { RecipeSearchParameters } from '../model/recipe-search-parameters';
import { CookType } from '../enum/recipe-cook-type';
import { RecipeCenterpieceType } from '../enum/recipe-centerpiece-type';


@Route('recipes')
@Tags('Recipes')
export class RecipeController extends Controller {
    private recipeService: RecipeService;

    constructor() {
        super();
        this.recipeService = new RecipeService();
    }

    @Get('/')
    public async getRecipes(
        @Query() textSearch?: string,
        @Query() cookType?: CookType,
        @Query() recipeCenterpieceType?: RecipeCenterpieceType,
        @Query() page?: number,
        @Query() pageSize?: number
    ): Promise<Recipe[]> {
        return this.recipeService.getRecipes({ textSearch, cookType, recipeCenterpieceType, page, pageSize });
    }

    @Get('/shopping-list')
    public async getShoppingListByIds(@Query() ids: string[]): Promise<Ingredient[]> {
        return this.recipeService.getShoppingList(ids);
    }

    @Response<NotFoundError>('404', 'Not Found')
    @Get('/:id')
    public async getRecipeById(id: string): Promise<Recipe> {
        const recipe = await this.recipeService.getRecipeById(id);

        if (!recipe) {
            throw new ApiError('RecipeNotFound', 404, 'Recipe not found');
        }
        return recipe;

    }

    @Post('/')
    public async createRecipe(@Body() recipe: Recipe): Promise<Recipe> {
        return this.recipeService.create(recipe);
    }

    @Response<NotFoundError>('404', 'Not Found')
    @Put('/:id')
    public async updateRecipe(id: string, @Body() recipe: Recipe): Promise<Recipe> {
        const updatedRecipe = this.recipeService.update(id, recipe);
        if (!updatedRecipe) {
            throw new ApiError('RecipeNotFound', 404, 'Recipe not found');
        }
        return recipe;
    }

    @Delete('/:id')
    public async deleteRecipe(id: string): Promise<void> {
        return this.recipeService.deleteRecipeById(id);
    }
}
