document.addEventListener("DOMContentLoaded", () => {
    // Attach event listeners to delete buttons
    document.querySelectorAll(".delete-btn").forEach((button) => {
      button.addEventListener("click", async (event) => {
        const recipeId = event.target.getAttribute("data-id"); // Get the recipe ID
  
        // Confirm before deletion
        if (!confirm("Are you sure you want to remove this recipe from favorites?")) {
          return;
        }
  
        try {
          // Send DELETE request
          const response = await fetch(`/favorites/${recipeId}`, {
            method: "DELETE",
          });
  
          const result = await response.json();
          if (result.success) {
            alert("Recipe removed from favorites!");
            // Remove the recipe card from the DOM
            const recipeCard = document.getElementById(`recipe-${recipeId}`);
            if (recipeCard) {
              recipeCard.remove();
            }
          } else {
            alert("Failed to remove recipe from favorites.");
          }
        } catch (error) {
          console.error("Error deleting recipe:", error);
          alert("An error occurred while deleting the recipe. Please try again.");
        }
      });
    });
  });
  