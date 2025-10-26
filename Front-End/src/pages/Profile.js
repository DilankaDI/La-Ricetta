import React, { useState } from "react";
import "./profile.css";
import { FaStar, FaRegBookmark, FaBookmark } from "react-icons/fa";

const Profile = () => {
  const [activeTab, setActiveTab] = useState("myRecipes");
  const [saved, setSaved] = useState({});

  const toggleSave = (id) => setSaved((prev) => ({ ...prev, [id]: !prev[id] }));

  const myRecipes = [
    {
      id: 1,
      title: "Spicy Tomato Pasta",
      image: "https://images.unsplash.com/photo-1504674900247-0877df9cc836",
      rating: 4.8,
      saves: 1200,
    },
    {
      id: 2,
      title: "Avocado Toast Deluxe",
      image: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c",
      rating: 4.9,
      saves: 3400,
    },
    {
      id: 3,
      title: "Chocolate Lava Cakes",
      image: "https://images.unsplash.com/photo-1601979031925-424e53b6caaa",
      rating: 5.0,
      saves: 5600,
    },
    {
      id: 4,
      title: "Summer Berry Salad",
      image: "https://images.unsplash.com/photo-1565958011705-44e211f05dc5",
      rating: 4.7,
      saves: 850,
    },
    {
      id: 5,
      title: "One-Pan Lemon Herb Chicken",
      image: "https://images.unsplash.com/photo-1617196034796-73dfa3ad6a56",
      rating: 4.8,
      saves: 2100,
    },
    {
      id: 6,
      title: "Classic Beef Tacos",
      image: "https://images.unsplash.com/photo-1601924579628-0a835f7a5e2a",
      rating: 4.9,
      saves: 1800,
    },
  ];

  // Example saved recipes (different list)
  const savedRecipes = [
    {
      id: 101,
      title: "Creamy Mushroom Risotto",
      image: "https://images.unsplash.com/photo-1606755962773-0e3b43b5f0e4",
      rating: 4.9,
      saves: 4000,
    },
    {
      id: 102,
      title: "Homemade Pizza Margherita",
      image: "https://images.unsplash.com/photo-1601924638867-3ec4ef4d70fa",
      rating: 5.0,
      saves: 7200,
    },
  ];

  const displayRecipes = activeTab === "myRecipes" ? myRecipes : savedRecipes;

  return (
    <div className="profile-container">
      <div className="profile-header">
        <img
          src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4"
          alt="Profile"
          className="profile-avatar"
        />
        <div className="profile-info">
          <h1>Elena Garcia</h1>
          <p className="username">@elena_the_foodie</p>
          <p className="bio">
            Passionate home cook exploring global cuisines. Follow for delicious,
            easy-to-make recipes! 🌍🍳🧁
          </p>
          <div className="stats">
            <span><strong>47</strong> Recipes</span>
            <span><strong>12.5k</strong> Followers</span>
            <span><strong>210</strong> Following</span>
          </div>
        </div>
      </div>

      <div className="tabs">
        <button
          className={activeTab === "myRecipes" ? "active" : ""}
          onClick={() => setActiveTab("myRecipes")}
        >
          My Recipes
        </button>
        <button
          className={activeTab === "savedRecipes" ? "active" : ""}
          onClick={() => setActiveTab("savedRecipes")}
        >
          Saved Recipes
        </button>
      </div>

      <div className="recipes-grid">
        {displayRecipes.map((recipe) => (
          <div className="recipe-card" key={recipe.id}>
            <img src={recipe.image} alt={recipe.title} />
            <div className="recipe-info">
              <h3>{recipe.title}</h3>
              <div className="recipe-meta">
                <span className="rating">
                  <FaStar className="star" /> {recipe.rating}
                </span>
                <span className="saves">
                  {recipe.saves.toLocaleString()} saves
                </span>
              </div>
            </div>
            <button
              className="save-btn"
              onClick={() => toggleSave(recipe.id)}
            >
              {saved[recipe.id] ? <FaBookmark /> : <FaRegBookmark />}
            </button>
          </div>
        ))}

        {activeTab === "myRecipes" && (
          <div className="add-card">
            <div className="add-icon">+</div>
            <p>Add New Recipe</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Profile;
