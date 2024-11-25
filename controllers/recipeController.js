const Recipe = require("../models/Recipe");

// Get all recipes
exports.getAllRecipes = async (req, res) => {
  try {
    const recipes = await Recipe.find();
    res.status(200).json(recipes);
  } catch (error) {
    console.error("Error fetching recipes:", error.message);
    res.status(500).json({ success: false, message: "Failed to fetch recipes." });
  }
};

// Delete a recipe
exports.deleteRecipe = async (req, res) => {
  try {
    const { id } = req.params;
    const deletedRecipe = await Recipe.findByIdAndDelete(id);
    if (!deletedRecipe) {
      return res.status(404).json({ success: false, message: "Recipe not found." });
    }
    res.status(200).json({ success: true, message: "Recipe deleted successfully." });
  } catch (error) {
    console.error("Error deleting recipe:", error.message);
    res.status(500).json({ success: false, message: "Failed to delete recipe." });
  }
};
