import React from "react";
import { NavLink } from "react-router-dom";

function Navbar() {
  return (
    <>
      <div id="Navlink">
        <NavLink exact activeClassName="active" to="/">
          Home
        </NavLink>
        <NavLink exact activeClassName="active" to="/about">
          About
        </NavLink>
        <NavLink exact activeClassName="active" to="/service">
          Service
        </NavLink>
        <NavLink exact activeClassName="active" to="/contact">
          Contact
        </NavLink>
      </div>
    </>
  );
}

export default Navbar;
