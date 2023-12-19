import { Get, Post, Put, Delete, Route, Tags } from 'tsoa';
import { RecipeService } from '../services/recipe.service';
import { Recipe } from '../model/recipe';

@Route('recipes')
@Tags('Recipes')
export class RecipeController {
    private recipeService: RecipeService;

    constructor() {
        this.recipeService = new RecipeService();
    }

    @Get('/')
    public async getAllRecipes(): Promise<Recipe[]> {
        return this.recipeService.getAll();
    }

    // @Get('/:id')
    // public async getRecipeById(id: number): Promise<Recipe> {
    //     return this.recipeService.getRecipeById(id);
    // }

    // @Post('/')
    // public async createRecipe(recipe: Recipe): Promise<Recipe> {
    //     return this.recipeService.createRecipe(recipe);
    // }

    // @Put('/:id')
    // public async updateRecipe(id: number, recipe: Recipe): Promise<Recipe> {
    //     return this.recipeService.updateRecipe(id, recipe);
    // }

    // @Delete('/:id')
    // public async deleteRecipe(id: number): Promise<void> {
    //     return this.recipeService.deleteRecipe(id);
    // }
}
