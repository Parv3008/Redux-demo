import React, { useContext } from "react";
import { Link } from "react-router-dom";
import ThemeContext from "../context/ThemeContext";
import { useSelector } from "react-redux";

const Navbar = () => {
  const { dark, toggleTheme } = useContext(ThemeContext);
  const cartItems = useSelector((state) => state.cart.items);

  return (
    <div>
      <nav className={`navbar navbar-expand-lg fixed-top shadow-sm py-3 ${dark ? "bg-dark navbar-dark" : "bg-light navbar-light"}`}>
        <div className="container">
          <Link className="navbar-brand fw-bold fs-4" to="/">
            OG Store
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link" to="/">
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/products">
                  Products 
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/about">
                  About
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/cart">
                  Cart
                </Link>
              </li>
            </ul>
            <div className="buttons">
              {/* <Link to="#" className={`btn me-2 ${dark ? "btn-outline-light" : "btn-outline-dark"}`}>
                Login
              </Link>
              <Link to="#" className={`btn me-2 ${dark ? "btn-outline-light" : "btn-outline-dark"}`}>
                Register
              </Link> */}
              <Link to="cart" className={`btn me-2 ${dark ? "btn-outline-light" : "btn-outline-dark"}`}>
                Cart({cartItems.length})
              </Link>
              <button className={`btn me-2 ${dark ? "btn-outline-light" : "btn-outline-dark"}`} onClick={toggleTheme}>{dark? "🌞 Light Mode": "🌑 Dark Mode"}</button>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
