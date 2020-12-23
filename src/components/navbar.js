import React from "react";
import { NavLink } from "react-router-dom";



function Navbar() {
  return (
    <div className="nav-wrapper">
        <div className="nav-link-wrapper">
          <NavLink exact to="/" activeClassName="nav-link-active">
            Home
          </NavLink>
        </div>

        <div className="nav-link-wrapper">
          <NavLink to="/gallery" activeClassName="nav-link-active">
            Gallery
          </NavLink>
        </div>

        <div className="nav-link-wrapper">
          <NavLink to="/about" activeClassName="nav-link-active">
            About
          </NavLink>
        </div>

        <div className="nav-link-wrapper">
          <NavLink to="/contact" activeClassName="nav-link-active">
            Contact
          </NavLink>

          <div className="nav-link-wrapper">
          <NavLink to="/upload" activeClassName="nav-link-active">
            Upload
          </NavLink>
        </div>
        </div>

      
    </div>
  );
}

export default Navbar;














