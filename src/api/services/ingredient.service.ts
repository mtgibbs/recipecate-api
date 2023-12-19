import RecipeStore from '../schema/recipe.schema';

export class IngredientService {

    public async getAll(): Promise<String[]> {

        const uniqueIngredientNames = (await RecipeStore.aggregate([
            { $unwind: '$ingredients' },
            { $group: { _id: '$ingredients.name' } },
            { $sort: { _id: 1 } } // Sort by name in ascending order
        ])).map<string>(doc => doc._id);

        return uniqueIngredientNames;
    }
}
