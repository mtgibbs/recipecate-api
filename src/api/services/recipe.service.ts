// src/users/usersService.ts
import { Recipe } from '../model/recipe';
import RecipeStore from '../schema/recipe';

export class RecipeService {

    public async getAll(): Promise<Recipe[]> {
        const recipes = await RecipeStore.find({});

        return recipes.map((recipe) => ({
            id: recipe._id,
            name: recipe.name,
            ingredients: recipe.ingredients,
            instructions: recipe.instructions
        }));
    }

}

// const router = express.Router();


// router.post('/recipes', async (req: Request, res: Response) => {
//     const recipe = new Recipe({
//         name: req.body.name,
//         ingredients: req.body.ingredients,
//         instructions: req.body.instructions
//     });

//     try {
//         const savedRecipe = await recipe.save();
//         res.json(savedRecipe);
//     } catch (err) {
//         res.json({ message: err });
//     }
// });


// router.get('/recipes', async (req: Request, res: Response) => {

//     console.log('get recipes');
//     try {
//         const recipes = await Recipe.find({});
//         console.log(recipes);
//         res.json(recipes);
//     } catch (err) {
//         console.log(err);
//         res.json({ message: err });
//     }
// });


// router.get('/recipes/:recipeId', async (req: Request, res: Response) => {
//     try {
//         const recipe = await Recipe.findById(req.params.recipeId);
//         res.json(recipe);
//     } catch (err) {
//         res.json({ message: err });
//     }
// });


// router.delete('/recipes/:recipeId', async (req: Request, res: Response) => {
//     try {
//         const removedRecipe = await Recipe.deleteOne({ _id: req.params.recipeId });
//         res.json(removedRecipe);
//     } catch (err) {
//         res.json({ message: err });
//     }
// });
