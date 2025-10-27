import React from "react";

const RecipeModal = ({ recipe, onClose }) => {
  return (
    <div className="menu-modal-overlay" onClick={onClose}>
      <div
        className="menu-modal"
        onClick={(e) => e.stopPropagation()} // prevents closing when clicking inside
      >
        <button className="menu-modal-close" onClick={onClose}>
          &times;
        </button>
        <img
          src={recipe.image}
          alt={recipe.title}
          className="menu-modal-img"
        />
        <h2 className="menu-modal-title">{recipe.title}</h2>
        <p className="menu-modal-desc">{recipe.description}</p>

        <h3 className="menu-modal-subtitle">Ingredients</h3>
        <ul className="menu-modal-list">
          {recipe.ingredients.map((item, i) => (
            <li key={i}>{item}</li>
          ))}
        </ul>

        <h3 className="menu-modal-subtitle">Instructions</h3>
        <p className="menu-modal-text">{recipe.instructions}</p>
      </div>
    </div>
  );
};

export default RecipeModal;
