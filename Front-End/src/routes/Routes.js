import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from '../pages/Home';
import About from '../pages/About';
import Recipes from '../pages/Recipes';
import Profile from '../pages/Profile';
import Settings from '../pages/settings';
import Menu from '../pages/Menu';

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/recipes" element={<Recipes />} />
      <Route path="/Profile" element={<Profile/>} />
      <Route path="/settings" element={<Settings/>} />
      <Route path="/menu" element={<Menu/>} />
      {/* Add other routes here */}
    </Routes>
  );
};

export default AppRoutes;
