import React from "react";
import { withRouter } from "react-router";
import { NavLink } from "react-router-dom";


const NavigationComponent = props => {
  const dynamicLink = (route, linkText) => {
    return (
      <div className="nav-link-wrapper">
        <NavLink to={route} activeClassName="nav-link-active">
          {linkText}
        </NavLink>
      </div>
    );
  };

//fetch call here?

  return (
    <div className="nav-wrapper">
        <div className="nav-link-wrapper">
          <NavLink exact to="/" activeClassName="nav-link-active">
            Home
          </NavLink>
        </div>

        <div className="nav-link-wrapper">
          <NavLink to="/about-me" activeClassName="nav-link-active">
            Gallery
          </NavLink>
        </div>

        <div className="nav-link-wrapper">
          <NavLink to="/contact" activeClassName="nav-link-active">
            About
          </NavLink>
        </div>

        <div className="nav-link-wrapper">
          <NavLink to="/blog" activeClassName="nav-link-active">
            Contact
          </NavLink>
        </div>

      
    </div>
  );
};

export default withRouter(NavigationComponent);












