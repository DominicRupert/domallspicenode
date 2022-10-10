import mongoose from "mongoose";
import { AccountSchema } from "../models/Account";
import { RecipeSchema } from "../models/Recipe";
import { FavoriteSchema } from "../models/Favorite";
import { IngredientSchema } from "../models/Ingredient";
import { ReviewSchema } from "../models/Review";

import { ValueSchema } from "../models/Value";
import { StepSchema } from "../models/Step";

class DbContext {
  Values = mongoose.model("Value", ValueSchema);
  Account = mongoose.model("Account", AccountSchema);
  Recipe = mongoose.model("Recipe", RecipeSchema);
  Ingredient = mongoose.model("Ingredient", IngredientSchema);
  Step = mongoose.model("Step", StepSchema);
  Favorite = mongoose.model("Favorite", FavoriteSchema);
  Review = mongoose.model("Review", ReviewSchema);
}

export const dbContext = new DbContext();
