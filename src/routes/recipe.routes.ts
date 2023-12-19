import express, { Request, Response } from 'express';
import Recipe from '../schema/recipe';

const router = express.Router();

/**
 * @swagger
 * /recipes:
 *   post:
 *     summary: Create a new recipe
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Recipe'
 *     responses:
 *       200:
 *         description: The created recipe.
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Recipe'
 */
router.post('/recipes', async (req: Request, res: Response) => {
    const recipe = new Recipe({
        name: req.body.name,
        ingredients: req.body.ingredients,
        instructions: req.body.instructions
    });

    try {
        const savedRecipe = await recipe.save();
        res.json(savedRecipe);
    } catch (err) {
        res.json({ message: err });
    }
});

/**
 * @swagger
 * /recipes:
 *   get:
 *     summary: Retrieve a list of recipes
 *     responses:
 *       200:
 *         description: A list of recipes.
 *         content:
 *           application/json:
 *             schema:
 *               type: 'array'
 *               items:
 *                 $ref: '#/components/schemas/Recipe'
 */
router.get('/recipes', async (req: Request, res: Response) => {

    console.log('get recipes');
    try {
        const recipes = await Recipe.find({});
        console.log(recipes);
        res.json(recipes);
    } catch (err) {
        console.log(err);
        res.json({ message: err });
    }
});

/**
 * @swagger
 * /recipes/{recipeId}:
 *   get:
 *     summary: Get a recipe by ID
 *     parameters:
 *       - in: path
 *         name: recipeId
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: The requested recipe.
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Recipe'
 */
router.get('/recipes/:recipeId', async (req: Request, res: Response) => {
    try {
        const recipe = await Recipe.findById(req.params.recipeId);
        res.json(recipe);
    } catch (err) {
        res.json({ message: err });
    }
});

/**
 * @swagger
 * /recipes/{recipeId}:
 *   delete:
 *     summary: Delete a recipe by ID
 *     parameters:
 *       - in: path
 *         name: recipeId
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: The deleted recipe.
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Recipe'
 */
router.delete('/recipes/:recipeId', async (req: Request, res: Response) => {
    try {
        const removedRecipe = await Recipe.deleteOne({ _id: req.params.recipeId });
        res.json(removedRecipe);
    } catch (err) {
        res.json({ message: err });
    }
});

export default router;
