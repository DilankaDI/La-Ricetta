import React from 'react';
import './Navbar.css';
import Logo from '../assets/Logo.png';
import 'boxicons/css/boxicons.min.css';

const Navbar = () => {
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
          <a href="#" style={{ '--i': 0 }}>Home</a>
          <a href="#" style={{ '--i': 1 }}>About</a>
          <a href="#" style={{ '--i': 2 }}>Add Recipes</a>
          <a href="#" style={{ '--i': 3 }}>F&Q</a>
        </nav>
      </header>
    </div>
  );
};

export default Navbar;
