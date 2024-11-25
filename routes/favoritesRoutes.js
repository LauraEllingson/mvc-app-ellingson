const express = require("express");
const router = express.Router();
const favoriteController = require("../controllers/favoriteController");

// Route to get all favorite recipes
router.get("/", favoriteController.getFavorites);

module.exports = router;


