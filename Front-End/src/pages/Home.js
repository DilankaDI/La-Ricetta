import React, { useEffect, useState } from 'react';
import './Home.css';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const Home = () => {
  const navigate = useNavigate();
  const [categories, setCategories] = useState([]);

  const handleMoreRecipes = () => {
    navigate('/menu');
  };

  useEffect(() => {
    // Fetch categories from Back-End
    axios.get("http://localhost:5000/api/categories")
      .then(res => setCategories(res.data))
      .catch(err => console.log(err));
  }, []);

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
          {categories.map(category => (
            <div key={category._id} className="recipe-card">
              <img src={category.image} alt={category.name} />
              <h3>{category.name}</h3>
            </div>
          ))}
        </div>
        <button className="more-recipes-button" onClick={handleMoreRecipes}>
          More Recipes
        </button>
      </div>
    </div>
  );
};

export default Home;



// import React from 'react';
// import './Home.css';
// import Fastfood from '../assets/fast food.jpg';
// import StreetFood from '../assets/street food.jpg';
// import Desserts from '../assets/dessert.jpg';
// import { useNavigate } from 'react-router-dom'; 
// const Home = () => {
//   const navigate = useNavigate(); 

//   const handleMoreRecipes = () => {
//     navigate('/menu'); 
//   };

//   return (
//     <div className="home">
//       <div className="home-banner">
//         <h1>Welcome to La Recetta</h1>
//         <p>Your ultimate destination for sharing and discovering amazing recipes!</p>
//         <input
//           type="text"
//           className="home-search-bar"
//           placeholder="Search for recipes..."
//         />
//       </div>
//       <div className="home-featured">
//         <h2>Featured Food Categories</h2>
//         <div className="recipe-cards">
//           <div className="recipe-card">
//             <img src={Fastfood} alt="Fast Foods" />
//             <h3>Fast Foods</h3>
//           </div>
//           <div className="recipe-card">
//             <img src={StreetFood} alt="Street Foods" />
//             <h3>Street Foods</h3>
//           </div>
//           <div className="recipe-card">
//             <img src={Desserts} alt="Comfort Foods" />
//             <h3>Desserts</h3>
//           </div>
//         </div>
//         <button className="more-recipes-button" onClick={handleMoreRecipes}>
//           More Recipes
//         </button>
//       </div>
//     </div>
//   );
// };

// export default Home;
