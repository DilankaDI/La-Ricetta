import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';
import Logo from '../assets/Logo.png';
import 'boxicons/css/boxicons.min.css';

const Navbar = () => {
  const [isProfileOpen, setIsProfileOpen] = useState(false);

  const toggleProfile = () => setIsProfileOpen(!isProfileOpen);

  return (
    <div>
      <header className='header'>
        {/* Logo */}
        <Link to="/">
          <img src={Logo} alt="La Ricetta Logo" className="logo" />
        </Link>

        {/* Mobile Menu Toggle */}
        <input type="checkbox" id="check" />
        <label htmlFor="check" className="icons">
          <i className="bx bx-menu" id="menu-icon"></i>
          <i className="bx bx-x" id="close-icon"></i>
        </label>

        {/* Navbar Links */}
        <nav className="navbar">
          <Link to="/" style={{ '--i': 0 }}>Home</Link>
          <Link to="/about" style={{ '--i': 1 }}>About</Link>
          <Link to="/add-recipes" style={{ '--i': 2 }}>Add Recipes</Link>
          <Link to="/faq" style={{ '--i': 3 }}>F&Q</Link>

          {/* Profile Dropdown */}
          <div className="profile" style={{ '--i': 4 }} onClick={toggleProfile}>
            <i className="bx bx-user"></i>
            {isProfileOpen && (
              <div className="profile-dropdown">
                <Link to="/profile">My Profile</Link>
                <Link to="/settings">Settings</Link>
                <button onClick={() => console.log("Logout clicked")}>
                  Logout
                </button>
              </div>
            )}
          </div>
        </nav>
      </header>
    </div>
  );
};

export default Navbar;
