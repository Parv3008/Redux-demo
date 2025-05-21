import React, { useContext } from "react";
import { useDispatch, useSelector } from "react-redux";
import ThemeContext from "../context/ThemeContext";
import {
  addToCart,
  incrementQuantity,
  decrementQuantity,
} from "../redux/actions/cartActions";

const ProductCard = ({ product }) => {
  const { dark } = useContext(ThemeContext);
  const dispatch = useDispatch();

  const cartItems = useSelector((state) => state.cart.items);
  const cartItem = cartItems.find((item) => item.id === product.id);

  const handleAdd = () => dispatch(addToCart(product));
  const handleIncrement = () => dispatch(incrementQuantity(product.id));
  const handleDecrement = () => dispatch(decrementQuantity(product.id));

  return (
    <div className="col-md-3 mb-4">
      <div
        className={`card h-100 text-center ${
          dark ? "bg-dark text-light border border-light" : ""
        }`}
      >
        <img
          src={product.image}
          className="card-img-top p-3"
          alt={product.title}
          height="250"
        />
        <div className="card-body d-flex justify-content-between flex-column">
          <h6 className="card-title">{product.title}</h6>
          <p className="card-text">${product.price}</p>

          {!cartItem ? (
            <button
              className={`btn ${
                dark ? "btn-outline-light" : "btn-outline-dark"
              } mt-2`}
              onClick={handleAdd}
            >
              Add to Cart
            </button>
          ) : (
            <div className="d-flex justify-content-between align-items-center gap-2 mt-2">
              <button
                className={`btn btn-sm px-3 ${
                  dark ? "btn-outline-light" : "btn-outline-dark"
                }`}
                onClick={handleDecrement}
              >
                -
              </button>
              <span>{cartItem.quantity}</span>
              <button
                className={`btn btn-sm px-3 ${
                  dark ? "btn-outline-light" : "btn-outline-dark"
                }`}
                onClick={handleIncrement}
              >
                +
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
