import React from "react";
import { Link, NavLink } from "react-router-dom";
import "./index2.css";
const Menu = () => {
    
  return (
    <>
      {/* <a href="/">about</a>
      <a href="/contact">contact</a> */}
      <br />
      {/* <Link activeClassName="link" to="/contact">
        contact
      </Link> */}
      <div id='div'>
        <NavLink exact activeClassName="linked" to="/">
          about
        </NavLink>
        <NavLink exact activeClassName="linked" to="/services">
          services
        </NavLink>
        <NavLink exact activeClassName="linked" to="/contact/vatsal/patel">
          contact
        </NavLink>
      </div>
    </>
  );
};

export default Menu;
