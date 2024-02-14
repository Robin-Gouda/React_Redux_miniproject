import React from "react";
import { NavLink } from "react-router-dom";
import "../index.css";

const Navbar = () => {
  return (
    <div className="Navbar">
      <span className="logo">REDUX STORE</span>
      <div>
        <NavLink className="navLink" to="/">
          Home
        </NavLink>
        <NavLink className="navLink" to="/cart">
          Cart
        </NavLink>
        <span className="cartCount">Cart items: 0</span>
      </div>
    </div>
  );
};

export default Navbar;
