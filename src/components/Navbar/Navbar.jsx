import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
const Navbar = () => {
  return (
    //-------- Navbar --------
    <div className="navbar__container">
      <Link to="/" className="navbar__left links">
        <h2>Teerex Store</h2>
      </Link>
      <div className="navbar__rigth">
        <Link to="/" className="links">
          <h2>Products</h2>
        </Link>
        <Link to="/cart" className="links">
          <span className="cart__count super">0</span>
          <img width="32px" src="/Images/cart.png" />
        </Link>
      </div>
    </div>
  );
};
export default Navbar;
