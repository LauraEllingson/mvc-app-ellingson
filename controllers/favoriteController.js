const Recipe = require("../models/Recipe");

// Get all favorite recipes
exports.getAllFavorites = async (req, res) => {
  try {
    const recipes = await Recipe.find(); // Fetch all favorite recipes
    res.render("favorites", { title: "Your Favorites", recipes });
  } catch (error) {
    console.error("Error fetching favorite recipes:", error.message);
    res.status(500).send("Server Error");
  }
};
