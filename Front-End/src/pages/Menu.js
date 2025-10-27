import React, { useState, useMemo } from "react";
import "./Menu.css";
import RecipeCard from "../components/RecipeCard";
import RecipeModal from "../components/RecipeModal";
import { allRecipes } from "../data/recipes";

const RECIPES_PER_PAGE = 30;
const recipeCategories = [
  "All",
  "Street Food",
  "Italian",
  "Chinese",
  "Dessert",
  "Salad",
  "Breakfast",
  "Vegan",
];

const MenuPage = () => {
  const [activeCategory, setActiveCategory] = useState("All");
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedRecipe, setSelectedRecipe] = useState(null);

  const filteredRecipes = useMemo(() => {
    if (activeCategory === "All") return allRecipes;
    return allRecipes.filter((r) => r.category === activeCategory);
  }, [activeCategory]);

  const paginatedRecipes = useMemo(() => {
    const startIndex = (currentPage - 1) * RECIPES_PER_PAGE;
    const endIndex = startIndex + RECIPES_PER_PAGE;
    return filteredRecipes.slice(startIndex, endIndex);
  }, [filteredRecipes, currentPage]);

  const totalPages = Math.ceil(filteredRecipes.length / RECIPES_PER_PAGE);

  return (
    <div className="menu-container">
      <header className="menu-header">
        <h1 className="menu-title">Discover Recipes</h1>
        <p className="menu-subtitle">
          Explore a world of flavors, one dish at a time.
        </p>
      </header>

      {/* Category Buttons */}
      <div className="menu-category-list">
        {recipeCategories.map((category) => (
          <button
            key={category}
            onClick={() => {
              setActiveCategory(category);
              setCurrentPage(1);
            }}
            className={`menu-category-btn ${
              activeCategory === category ? "active" : ""
            }`}
          >
            {category}
          </button>
        ))}
      </div>

      {/* Recipe Cards */}
      <div className="menu-card-grid">
        {paginatedRecipes.map((recipe) => (
          <RecipeCard
            key={recipe.id}
            recipe={recipe}
            onClick={() => setSelectedRecipe(recipe)}
          />
        ))}
      </div>

      {/* Pagination */}
      {totalPages > 1 && (
        <div className="menu-pagination">
          <button
            onClick={() => setCurrentPage((p) => Math.max(p - 1, 1))}
            disabled={currentPage === 1}
            className="menu-page-btn"
          >
            Previous
          </button>
          <span className="menu-page-info">
            Page {currentPage} of {totalPages}
          </span>
          <button
            onClick={() => setCurrentPage((p) => Math.min(p + 1, totalPages))}
            disabled={currentPage === totalPages}
            className="menu-page-btn"
          >
            Next
          </button>
        </div>
      )}

      {/* Modal */}
      {selectedRecipe && (
        <RecipeModal
          recipe={selectedRecipe}
          onClose={() => setSelectedRecipe(null)}
        />
      )}
    </div>
  );
};

export default MenuPage;
