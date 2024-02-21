import mongoose, { Schema, Document } from 'mongoose';
import { Ingredient } from '../model/ingredient';
import { UNITS_OF_MEASUREMENT } from '../enum/unit-of-measurement';
import { COOK_TYPES, CookType } from '../enum/recipe-cook-type';
import { RECIPE_CENTERPIECE_TYPE, RecipeCenterpieceType } from '../enum/recipe-centerpiece-type';

interface IRecipe extends Document {
    name: string;
    ingredients: Array<Ingredient>;
    instructions: string;
    cookType: CookType,
    totalTimeMinutes: number,
    recipeCenterpieceType: RecipeCenterpieceType,
}

const RecipeSchema: Schema = new Schema({
    name: { type: String, required: true },
    ingredients: [
        {
            name: { type: String, required: true },
            quantity: { type: Number, required: true },
            unit: {
                type: String, required: true, enum: UNITS_OF_MEASUREMENT
            },
            is_optional: { type: Boolean, default: false, required: false }
        }
    ],
    instructions: { type: String, required: true },
    cookType: { type: String, required: false, enum: COOK_TYPES },
    totalTimeMinutes: { type: Number, required: false },
    recipeCenterpieceType: { type: String, required: false, enum: RECIPE_CENTERPIECE_TYPE },
    is_deleted: { type: Boolean, default: false, required: false }
});

const RecipeStore = mongoose.model<IRecipe>('Recipe', RecipeSchema);
export default RecipeStore;
