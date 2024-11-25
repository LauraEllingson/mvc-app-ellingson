const express = require("express");
const router = express.Router();
const axios = require("axios");

const SPOONACULAR_API_BASE = "https://api.spoonacular.com";

// get random recipes
router.get("/random", async (req, res) => {
  const { number = 1 } = req.query; // Number of random recipes to fetch

  try {
    const response = await axios.get(`${SPOONACULAR_API_BASE}/recipes/random`, {
      params: {
        apiKey: process.env.SPOONACULAR_API_KEY,
        number,
      },
    });

    res.json(response.data); // Send the random recipes to the frontend
  } catch (error) {
    console.error("Error fetching random recipes:", error.response?.data || error.message);
    res.status(500).json({ error: "Failed to fetch random recipes" });
  }
});

module.exports = router;

