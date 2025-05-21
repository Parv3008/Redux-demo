import { useDispatch, useSelector } from "react-redux";
import { useContext } from "react";
import ThemeContext from "../context/ThemeContext";
import {
  clearCart,
  removeFromCart,
  incrementQuantity,
  decrementQuantity,
} from "../redux/actions/cartActions";

const Cart = () => {
  const { dark } = useContext(ThemeContext);
  const cartItems = useSelector((state) => state.cart.items);
  const dispatch = useDispatch();

  const subtotal = cartItems
    .reduce((sum, item) => sum + item.price * item.quantity, 0)
    .toFixed(2);

  return (
    <div className={`${dark ? "text-light bg-dark" : ""}`}>
      <div className={`container py-5 mt-5`} style={{ height: "93.5vh" }}>
        <div className="d-flex justify-content-between">
          <h2>Cart</h2>
          <button
            className={`btn btn-sm ${
              dark ? "btn-outline-light" : "btn-outline-dark"
            }`}
            onClick={() => dispatch(clearCart())}
          >
            Clear Cart
          </button>
        </div>

        {cartItems.length === 0 ? (
          <p>Your cart is empty.</p>
        ) : (
          <>
            <ul className="list-group my-5">
              {cartItems.map((item) => (
                <li
                  key={item.id}
                  className={`list-group-item ${
                    dark ? "bg-dark text-light border-light" : ""
                  }`}
                >
                  <div className="d-flex justify-content-between align-items-center">
                    <div className="d-flex align-items-center">
                      <img
                        src={item.image}
                        className="m-2"
                        alt={item.title}
                        height="60px"
                        width="60px"
                      />
                      <div>
                        <strong>{item.title}</strong> <br />
                        <small>${item.price} each</small>
                      </div>
                    </div>
                    <div className="d-flex align-items-center gap-2">
                      <button
                        className={`btn btn-sm ${
                          dark ? "btn-outline-light" : "btn-outline-dark"
                        }`}
                        onClick={() => dispatch(decrementQuantity(item.id))}
                      >
                        -
                      </button>
                      <span>{item.quantity}</span>
                      <button
                        className={`btn btn-sm ${
                          dark ? "btn-outline-light" : "btn-outline-dark"
                        }`}
                        onClick={() => dispatch(incrementQuantity(item.id))}
                      >
                        +
                      </button>
                      <button
                        className={`btn btn-sm ${
                          dark ? "btn-outline-light" : "btn-outline-dark"
                        }`}
                        onClick={() => dispatch(removeFromCart(item.id))}
                      >
                        Remove
                      </button>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
            <h5 className="d-flex justify-content-end">
              Subtotal: ${subtotal}
            </h5>
          </>
        )}
      </div>
    </div>
  );
};

export default Cart;
