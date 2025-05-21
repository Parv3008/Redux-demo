import React, { useContext } from "react";
import { Link } from "react-router-dom";
import ThemeContext from "../context/ThemeContext";
import "../App.css"

const Home = () => {
  const { dark } = useContext(ThemeContext);

  return (
    <div
      className={`home d-flex align-items-center justify-content-center ${
        dark ? "bg-dark text-light" : "bg-light text-dark"
      }`}
      style={{ height: "100vh"}}
    >
        <div className="bg-img"></div>
      <div className="text text-center">
        <h1 className="mb-4">Welcome to the OG Store</h1>
        <p className="lead mb-4">
          Explore a wide variety of products at unbeatable prices.
        </p>
        <Link to="/products" className="btn btn-dark btn-lg">
          Browse Products
        </Link>
      </div>
    </div>
  );
};

export default Home;
