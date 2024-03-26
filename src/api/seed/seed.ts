import Recipe from '../schema/recipe.schema';
import seedRecipes from './recipe.seed';

const runSeed = async () => {

    try {
        console.log('Running recipe seed...');

        const existingRecipes = await Recipe.find({});
        const existingRecipeNames = existingRecipes.map(recipe => recipe.name);

        const newRecipes = seedRecipes.filter(recipe => !existingRecipeNames.includes(recipe.name));

        if (newRecipes.length) {
            await Recipe.insertMany(newRecipes);
            console.log('New recipes added to the database:', newRecipes);
        } else {
            console.log('No new recipes found.');
        }

        console.log('Data seeded successfully.');

    } catch (err) {
        console.error('Error counting documents', err);
    }
};

export default runSeed;
