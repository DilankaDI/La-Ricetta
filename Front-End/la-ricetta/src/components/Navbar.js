import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';
import Logo from '../assets/Logo.png';
import 'boxicons/css/boxicons.min.css';

const Navbar = () => {

  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isProfileOpen, setIsProfileOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const toggleProfile = () => setIsProfileOpen(!isProfileOpen);

  return (
    <div>
      <header className='header'>
        <a href="/">
          <img src={Logo} alt="La Ricetta Logo" className="logo" />
        </a>

        <input type='checkbox' id='check'></input>
        <label htmlFor="check" className='icons'>
          <i className='bx bx-menu' id='menu-icon'></i>
          <i className='bx bx-x' id='close-icon'></i>
        </label>

        <nav className='navbar'>
          <a href="/" style={{ '--i': 0 }}>Home</a>
          <a href="About" style={{ '--i': 1 }}>About</a>
          <a href="#" style={{ '--i': 2 }}>Add Recipes</a>
          <a href="#" style={{ '--i': 3 }}>F&Q</a>

        <div className="profile" style={{ '--i': 4 }} onClick={toggleProfile}>
          <i className='bx bx-user'></i>
          {isProfileOpen && (
            <div className="profile-dropdown">
              <a href="#">My Profile</a>
              <a href="#">Settings</a>
              <a href="#">Logout</a>
            </div>
          )}
        </div>
        </nav>
      </header>
    </div>
  );
};

export default Navbar;
