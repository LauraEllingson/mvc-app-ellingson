const express = require("express");
const router = express.Router();
const recipeController = require("../controllers/recipeController");

// Route to get all recipes
router.get("/", recipeController.getAllRecipes);

// Route to delete a recipe
router.delete("/:id", recipeController.deleteRecipe);

module.exports = router;

