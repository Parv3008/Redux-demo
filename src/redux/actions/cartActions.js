import { ADD_TO_CART, CLEAR_CART, REMOVE_FROM_CART, INCREMENT_QUANTITY, DECREMENT_QUANTITY } from "../types/cartTypes";

export const addToCart = (product) => ({
  type: ADD_TO_CART,
  payload: product,
});

export const removeFromCart = (id) => ({
  type: REMOVE_FROM_CART,
  payload: id,
});

export const clearCart = () => ({
  type: CLEAR_CART,
});

export const incrementQuantity = (id) => ({
  type: INCREMENT_QUANTITY,
  payload: id,
});

export const decrementQuantity = (id) => ({
  type: DECREMENT_QUANTITY,
  payload: id,
});
