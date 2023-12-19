import { Controller, Get, Post, Put, Delete, Route, Tags } from 'tsoa';
import { IngredientService } from '../services/ingredient.service';

@Route('ingredients')
@Tags('Ingredients')
export class IngredientController extends Controller {
    private ingredientService: IngredientService;

    constructor() {
        super();
        this.ingredientService = new IngredientService();
    }

    @Get()
    public async getAllIngredients(): Promise<String[]> {
        return this.ingredientService.getAll();
    }
}
