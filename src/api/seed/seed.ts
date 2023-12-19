import Recipe from '../schema/recipe.schema';
import seedRecipes from './recipe.seed';

const runSeed = async () => {

    try {
        const count = await Recipe.countDocuments({});

        if (count) {
            return;
        }

        console.log('Empty Database Detected.  Seeding w/ initial recipes.');
        await Recipe.insertMany(seedRecipes);
        console.log('Data seeded successfully.');

    } catch (err) {
        console.error('Error counting documents', err);
    }
};

export default runSeed;
