const express = require("express");
const router = express.Router();
const Recipe = require("../models/Recipe");

// Save a recipe to the database
router.post("/save", async (req, res) => {
  try {
    const { title, image, ingredients, instructions } = req.body;
    const newRecipe = new Recipe({ title, image, ingredients, instructions });
    await newRecipe.save();
    res.json({ success: true, message: "Recipe saved successfully." });
  } catch (error) {
    console.error("Error saving recipe:", error.message);
    res.status(500).json({ success: false, error: "Failed to save recipe." });
  }
});

// Get all saved recipes
router.get("/", async (req, res) => {
  try {
    const recipes = await Recipe.find();
    res.json(recipes);
  } catch (error) {
    console.error("Error fetching recipes:", error.message);
    res.status(500).json({ success: false, error: "Failed to fetch recipes." });
  }
});


module.exports = router;
