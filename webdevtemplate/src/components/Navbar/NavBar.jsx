import React, { useState, useEffect } from "react";
import Logo from "../../assets/logo.png";
import "./navbar.scss";
import { Menu, MenuItem, IconButton } from "@mui/material";
import { Menu as MenuIcon, Close, ExpandMore, DarkMode, LightMode, Language } from "@mui/icons-material";

function NavBar() {
  const [isOpen, setIsOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(() => localStorage.getItem("theme") === "dark");
  const [anchorEl, setAnchorEl] = useState(null);

  // Apply dark mode settings
  useEffect(() => {
    document.body.classList.toggle("dark-mode", darkMode);
    localStorage.setItem("theme", darkMode ? "dark" : "light");
  }, [darkMode]);

  // Language selector handlers
  const handleLanguageClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleLanguageClose = () => {
    setAnchorEl(null);
  };

  return (
    <nav className={`navbar ${darkMode ? "dark" : "light"}`} data-aos="fade-down">
      <div className="container">
        <div className="nav-content">
          {/* Logo */}
          <div className="logo">
            <img src={Logo} alt="Logo" className="logo-img" />
            <span>ESSS</span>
          </div>

          {/* Menu Icon */}
          <IconButton className="menu-icon" onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <Close sx={{ color: darkMode ? "white" : "black" }} /> : <MenuIcon sx={{ color: darkMode ? "white" : "black" }} />}
          </IconButton>

          {/* Navigation Links */}
          <ul className={`nav-links ${isOpen ? "open" : ""}`}>
            <li><a href="#">About ESSS</a></li>
            <li><a href="#">Community</a></li>
            <li><a href="#">Multimedia</a></li>
            <li><a href="#">Blogs</a></li>
            <li><a href="#">Opportunity</a></li>
            <li><a href="#">Discover</a></li>
          </ul>

          {/* Right Side Buttons */}
          <div className="nav-icons">
            {/* Dark Mode Toggle */}
            <IconButton onClick={() => setDarkMode(!darkMode)} className="dark-mode-toggle">
              {darkMode ? <LightMode sx={{ color: "white" }} /> : <DarkMode sx={{ color: "black" }} />}
            </IconButton>

            {/* Language Selector */}
            <IconButton onClick={handleLanguageClick} className="language-icon">
              <Language sx={{ color: darkMode ? "white" : "black" }} />
            </IconButton>
            <Menu anchorEl={anchorEl} open={Boolean(anchorEl)} onClose={handleLanguageClose}>
              <MenuItem onClick={handleLanguageClose}>English</MenuItem>
              <MenuItem onClick={handleLanguageClose}>Amharic</MenuItem>
              <MenuItem onClick={handleLanguageClose}>French</MenuItem>
            </Menu>

            {/* Login Button */}
            <button className="login-btn">Login</button>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default NavBar;