import React from "react";
import { NavLink } from "react-router-dom";
import { UseSelector, useSelector } from "react-redux";
import "../index.css";

const Navbar = () => {
  const items = useSelector((state) => state.cart);
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
        <span className="cartCount">Cart items: {items.length}</span>
      </div>
    </div>
  );
};

export default Navbar;
