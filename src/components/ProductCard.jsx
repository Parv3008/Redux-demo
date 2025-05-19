import React from "react";

const ProductCard = ({ product }) => {
  return (
    <div className="col-md-3 mb-4">
      <div className="card h-100 text-center">
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