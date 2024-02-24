import mongoose from 'mongoose';
import { Recipe } from '../model/recipe';
import RecipeStore from '../schema/recipe.schema';
import { Ingredient } from '../model/ingredient';
import { RecipeSearchParameters } from '../model/recipe-search-parameters';

export class RecipeService {

    public async getRecipes(searchParameters: RecipeSearchParameters): Promise<Recipe[]> {

        const { textSearch, cookType, recipeCenterpieceType } = searchParameters;
        const query: any = {};

        if (textSearch) {
            query.$or = [
                { name: { $regex: textSearch, $options: 'i' } },
                { 'ingredients.name': { $regex: textSearch, $options: 'i' } }
            ];
        }

        if (cookType) {
            query.cookType = cookType;
        }

        if (recipeCenterpieceType) {
            query.recipeCenterpieceType = recipeCenterpieceType;
        }

        const page = searchParameters.page || 1;
        const pageSize = searchParameters.pageSize || 10;

        const recipes = await RecipeStore.find(query)
            .skip((page - 1) * pageSize)
            .limit(pageSize);

        return recipes.map((recipe) => ({
            id: recipe._id,
            name: recipe.name,
            ingredients: recipe.ingredients,
            instructions: recipe.instructions,
            cookType: recipe.cookType,
            totalTimeMinutes: recipe.totalTimeMinutes,
            recipeCenterpieceType: recipe.recipeCenterpieceType
        }));
    }

    public async getAll(): Promise<Recipe[]> {
        const recipes = await RecipeStore.find({});

        return recipes.map((recipe) => ({
            id: recipe._id,
            name: recipe.name,
            ingredients: recipe.ingredients,
            instructions: recipe.instructions,
            cookType: recipe.cookType,
            totalTimeMinutes: recipe.totalTimeMinutes,
            recipeCenterpieceType: recipe.recipeCenterpieceType
        }));
    }

    public async getRecipeById(recipeId: string): Promise<Recipe | undefined> {

        const recipe = await RecipeStore.findById(recipeId);

        if (recipe) {
            return {
                id: recipe._id,
                name: recipe.name,
                ingredients: recipe.ingredients,
                instructions: recipe.instructions,
                cookType: recipe.cookType,
                totalTimeMinutes: recipe.totalTimeMinutes,
                recipeCenterpieceType: recipe.recipeCenterpieceType
            };
        }

        return undefined;
    }

    public async deleteRecipeById(recipeId: string): Promise<void> {
        await RecipeStore.deleteOne({ _id: new mongoose.Types.ObjectId(recipeId) });
    }

    public async create(recipe: Recipe): Promise<Recipe> {
        const newRecipe = new RecipeStore({
            name: recipe.name,
            ingredients: recipe.ingredients,
            instructions: recipe.instructions
        });

        const savedRecipe = await newRecipe.save();

        return {
            id: savedRecipe._id,
            name: savedRecipe.name,
            ingredients: savedRecipe.ingredients,
            instructions: savedRecipe.instructions,
            cookType: savedRecipe.cookType,
            totalTimeMinutes: savedRecipe.totalTimeMinutes,
            recipeCenterpieceType: savedRecipe.recipeCenterpieceType
        };
    }

    public async update(recipeId: string, recipe: Recipe): Promise<Recipe | undefined> {

        const updatedRecipe = await RecipeStore.findByIdAndUpdate(new mongoose.Types.ObjectId(recipeId), {
            name: recipe.name,
            ingredients: recipe.ingredients,
            instructions: recipe.instructions
        }, { new: true });

        if (updatedRecipe) {
            return {
                id: updatedRecipe._id,
                name: updatedRecipe.name,
                ingredients: updatedRecipe.ingredients,
                instructions: updatedRecipe.instructions,
                cookType: updatedRecipe.cookType,
                totalTimeMinutes: updatedRecipe.totalTimeMinutes,
                recipeCenterpieceType: updatedRecipe.recipeCenterpieceType
            };
        }

        return undefined;
    }

    public async getShoppingList(recipeIds: string[]): Promise<Ingredient[]> {

        const objectIds = recipeIds.map(id => new mongoose.Types.ObjectId(id));

        const shoppingList = await RecipeStore.aggregate([
            { $match: { _id: { $in: objectIds }, is_deleted: false } },
            { $unwind: "$ingredients" },
            {
                $group: {
                    _id: "$ingredients.name",
                    quantity: { $sum: "$ingredients.quantity" },
                    unit: { $first: "$ingredients.unit" }
                }
            },
            {
                $project: {
                    _id: 0,
                    name: "$_id",
                    quantity: 1,
                    unit: 1
                }
            }
        ]);

        return shoppingList;
    }
}
