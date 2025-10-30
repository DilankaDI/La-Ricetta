import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from '../pages/Home';
import About from '../pages/About';
import Recipes from '../pages/Recipes';
import Profile from '../pages/Profile';
import Settings from '../pages/settings';
import Menu from '../pages/Menu';
import Faq from '../pages/faq';
import Login from '../pages/Login';
import Signup from '../pages/Signup';
import AdminDashboard from "./admin/AdminDashboard";
import ManageUsers from "./admin/ManageUsers";
import ManageRecipes from "./admin/ManageRecipes";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/recipes" element={<Recipes />} />
      <Route path="/Profile" element={<Profile/>} />
      <Route path="/settings" element={<Settings/>} />
      <Route path="/menu" element={<Menu/>} />
      <Route path="/faq" element={<Faq/>} />
      <Route path="/login" element={<Login/>} />
      <Route path="/signup" element={<Signup/>} />
      <Route path="/admin" element={<AdminDashboard />} />
      <Route path="/admin/users" element={<ManageUsers />} />
      <Route path="/admin/recipes" element={<ManageRecipes />} />

      {/* Add other routes here */}
    </Routes>
  );
};

export default AppRoutes;
