import React from 'react';
import './Home.css';
import Fastfood from '../assets/fast food.jpg';
import StreetFood from '../assets/street food.jpg';
import Desserts from '../assets/dessert.jpg';
import { useNavigate } from 'react-router-dom'; // Import useNavigate for navigation

const Home = () => {
  const navigate = useNavigate(); // Hook for navigation

  const handleMoreRecipes = () => {
    navigate('/menu'); // Navigate to the menu page
  };

  return (
    <div className="home">
      <div className="home-banner">
        <h1>Welcome to La Recetta</h1>
        <p>Your ultimate destination for sharing and discovering amazing recipes!</p>
        <input
          type="text"
          className="home-search-bar"
          placeholder="Search for recipes..."
        />
      </div>
      <div className="home-featured">
        <h2>Featured Food Categories</h2>
        <div className="recipe-cards">
          <div className="recipe-card">
            <img src={Fastfood} alt="Fast Foods" />
            <h3>Fast Foods</h3>
          </div>
          <div className="recipe-card">
            <img src={StreetFood} alt="Street Foods" />
            <h3>Street Foods</h3>
          </div>
          <div className="recipe-card">
            <img src={Desserts} alt="Comfort Foods" />
            <h3>Desserts</h3>
          </div>
        </div>
        <button className="more-recipes-button" onClick={handleMoreRecipes}>
          More Recipes
        </button>
      </div>
    </div>
  );
};

export default Home;
