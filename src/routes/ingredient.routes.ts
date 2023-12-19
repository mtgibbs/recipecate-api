import express from 'express';
import Recipe from '../schema/recipe';

const router = express.Router();

/**
 * @swagger
 * /ingredients:
 *   get:
 *     summary: Get unique ingredient names
 *     description: Retrieve a list of unique ingredient names from the recipes.
 *     responses:
 *       200:
 *         description: Successful response with an array of unique ingredient names.
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 type: string
 *       500:
 *         description: Internal server error occurred.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 */
router.get('/ingredients', async (req, res) => {

    try {
        const uniqueIngredientNames = (await Recipe.aggregate([
            { $unwind: '$ingredients' },
            { $group: { _id: '$ingredients.name' } },
        ])).map<string>(doc => doc._id);

        res.json(uniqueIngredientNames);
    } catch (err) {
        console.error('An error occurred while fetching unique ingredients:', err);
        res.status(500).json({ message: err });
    }
});

export default router;
