import React, { useState } from 'react';
import { Link } from 'react-scroll';
import '../styles/Navbar.css';

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div className="navbar-logo">
          <span>Portfolio</span>
        </div>
        <div className={`menu ${isOpen ? 'active' : ''}`}>
          <Link to="about" smooth={true} duration={500} className="nav-link">
            About
          </Link>
          <Link to="skills" smooth={true} duration={500} className="nav-link">
            Skills
          </Link>
          <Link to="projects" smooth={true} duration={500} className="nav-link">
            Projects
          </Link>
          <Link to="contact" smooth={true} duration={500} className="nav-link">
            Contact
          </Link>
        </div>
        <div className="hamburger" onClick={toggleMenu}>
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
