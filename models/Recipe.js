const mongoose = require("mongoose");

const RecipeSchema = new mongoose.Schema({
  title: { type: String, required: true },
  image: { type: String },
  ingredients: { type: [String], required: true },
  instructions: { type: String },
});

module.exports = mongoose.model("Recipe", RecipeSchema, "favorite-recipes");

