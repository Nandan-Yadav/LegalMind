import React, { useEffect, useRef, useState } from "react";
import { NAV_ITEMS } from "../../Constants/home_constants";
import { Link, NavLink } from "react-router-dom";
import "../../styles/Navbar.css";

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);

  const handleToggleMenu = () => {
    setShowMenu((prev) => !prev);
  };

  return (
    <header className="navbar">
      <Link to={'/'} className="navbar-logo">LegalMind</Link>
      <nav className={`nav-items ${showMenu && "open-menu"}`}  >
        {NAV_ITEMS.map((item) => {
          return (
            <NavLink
              key={item.name}
              to={item.path}
              className={({ isActive }) =>
                isActive ? "nav-item active" : "nav-item"
              }
              onClick={showMenu && handleToggleMenu}
            >
              {item.name}
            </NavLink>
          );
        })}
      </nav>

      <img
        src={
          !showMenu
            ? "/src/assets/icons/menu_open.svg"
            : "/src/assets/icons/menu_close.svg"
        }
        alt="menu icon"
        className={`menu-icon ${showMenu ? "menu-open" : "menu-close"}`}
        onClick={handleToggleMenu}
      />
    </header>
  );
};

export default Navbar;
