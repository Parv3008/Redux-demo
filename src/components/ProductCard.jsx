import React, { useContext } from "react";
import ThemeContext from "../context/ThemeContext";

const ProductCard = ({ product }) => {
  const { dark } = useContext(ThemeContext);
  return (
    <div className={`col-md-3 mb-4 `}>
      <div className={`card h-100 text-center ${dark ? "bg-dark text-light border boder-light" : ""}`}>
        <img
          src={product.image}
          className="card-img-top p-3"
          alt={product.title}
          height="250"
        />
        <div className="card-body">
          <h6 className="card-title">{product.title}</h6>
          <p className="card-text">${product.price}</p>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;