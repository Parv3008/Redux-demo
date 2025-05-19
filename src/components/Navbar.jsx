import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div>
      <nav className="navbar navbar-expand-lg bg-white shadow-sm py-3 fixed-top">
        <div className="container">
          <Link className="navbar-brand fw-bold fs-4" to="/">
            Fake Store
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
                  Function
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/products">
                  Class 
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/about">
                  About
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/contact">
                  Contact
                </Link>
              </li>
            </ul>
            <div className="buttons">
              <Link to="#" className="btn btn-outline-dark me-2">
                Login
              </Link>
              <Link to="#" className="btn btn-outline-dark me-2">
                Register
              </Link>
              <Link to="#" className="btn btn-outline-dark me-2">
                Cart(0)
              </Link>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
