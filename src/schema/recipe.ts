import mongoose, { Schema, Document } from 'mongoose';
import { Ingredient } from '../model/ingredient';

interface IRecipe extends Document {
    name: string;
    ingredients: Array<Ingredient>;
    instructions: string;
}

const RecipeSchema: Schema = new Schema({
    name: { type: String, required: true },
    ingredients: [
        {
            name: { type: String, required: true },
            quantity: { type: Number, required: true },
            unit: {
                type: String, required: true, enum: [
                    'unit',
                    'cup',
                    'tsp',
                    'tbs',
                    'oz',
                    'lb',
                    'pint',
                    'quart',
                    'gallon',
                    'g'
                ]
            }
        }
    ],
    instructions: { type: String, required: true },
    is_deleted: { type: Boolean, default: false, required: false }
});

const Recipe = mongoose.model<IRecipe>('Recipe', RecipeSchema);
export default Recipe;
