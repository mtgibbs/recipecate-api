import RecipeStore from '../schema/recipe';

export class IngredientService {

    public async getAll(): Promise<String[]> {

        const uniqueIngredientNames = (await RecipeStore.aggregate([
            { $unwind: '$ingredients' },
            { $group: { _id: '$ingredients.name' } },
        ])).map<string>(doc => doc._id);

        return uniqueIngredientNames;
    }
}