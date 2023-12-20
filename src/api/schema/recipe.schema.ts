import mongoose, { Schema, Document } from 'mongoose';
import { Ingredient } from '../model/ingredient';
import { UNITS_OF_MEASUREMENT } from '../enum/unit-of-measurement';

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
                type: String, required: true, enum: UNITS_OF_MEASUREMENT
            }
        }
    ],
    instructions: { type: String, required: true },
    is_deleted: { type: Boolean, default: false, required: false }
});

const RecipeStore = mongoose.model<IRecipe>('Recipe', RecipeSchema);
export default RecipeStore;
