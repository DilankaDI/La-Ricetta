import React from "react";

const RecipeCard = ({ recipe, onClick }) => {
  return (
    <div className="menu-recipe-card" onClick={onClick}>
      <img src={recipe.image} alt={recipe.title} className="menu-card-img" />
      <div className="menu-card-content">
        <h3 className="menu-card-title">{recipe.title}</h3>
        <p className="menu-card-desc">{recipe.description}</p>
      </div>
    </div>
  );
};

export default RecipeCard;
