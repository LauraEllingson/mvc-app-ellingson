const getRandomRecipes = async () => {
    try {
      const response = await fetch("/api/spoonacular/random?number=1");
      const data = await response.json();
  
      displayRecipes(data.recipes);
    } catch (error) {
      console.error("Error fetching random recipes:", error);
      alert("Failed to fetch random recipes. Please try again later.");
    }
  };
  
  const displayRecipes = (recipes) => {
    const container = document.getElementById("recipes-container");
    container.innerHTML = ""; // Clear previous results
  
    if (!recipes || recipes.length === 0) {
      container.innerHTML = "<p>No recipes found.</p>";
      return;
    }
  
    recipes.forEach((recipe) => {
      const recipeDiv = document.createElement("div");
      recipeDiv.style.border = "1px solid #ccc";
      recipeDiv.style.margin = "10px";
      recipeDiv.style.padding = "10px";
  
      recipeDiv.innerHTML = `
        <h3>${recipe.title}</h3>
        <img src="${recipe.image}" alt="${recipe.title}" style="width:200px;">
        <h4>Ingredients:</h4>
        <ul>
          ${recipe.extendedIngredients
            .map((ingredient) => `<li>${ingredient.original}</li>`)
            .join("")}
        </ul>
        <h4>Instructions:</h4>
        <p>${recipe.instructions || "No instructions available."}</p>
        <button class="save-btn">Save Recipe</button>
      `;
  
      container.appendChild(recipeDiv);
  
      // Add save functionality
      recipeDiv.querySelector(".save-btn").addEventListener("click", () => saveRecipe(recipe));
    });
  };
  
  const saveRecipe = async (recipe) => {
    try {
      const response = await fetch("/api/recipes/save", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          title: recipe.title,
          image: recipe.image,
          ingredients: recipe.extendedIngredients.map((ing) => ing.original),
          instructions: recipe.instructions,
        }),
      });
  
      const result = await response.json();
      if (result.success) {
        alert("Recipe saved successfully!");
      } else {
        alert("Failed to save recipe.");
      }
    } catch (error) {
      console.error("Error saving recipe:", error);
      alert("Failed to save recipe.");
    }
  };
  
  document.getElementById("random-recipe-btn").addEventListener("click", getRandomRecipes);
  