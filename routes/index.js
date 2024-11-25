const express = require("express");
const router = express.Router();

// Import individual routes
const recipeRoutes = require("./recipeRoutes");
const favoritesRoutes = require("./favoritesRoutes");

// Mount routes
router.use("/api/recipes", recipeRoutes);
router.use("/favorites", favoritesRoutes);

module.exports = router;

