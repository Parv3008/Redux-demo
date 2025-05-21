import { produce } from "immer";
import {
  ADD_TO_CART,
  REMOVE_FROM_CART,
  CLEAR_CART,
  DECREMENT_QUANTITY,
  INCREMENT_QUANTITY,
} from "../types/cartTypes";

const initialState = {
  items: [],
};

const cartReducer = produce((state = initialState, action) => {
  switch (action.type) {
    case ADD_TO_CART: {
      const item = state.items.find((i) => i.id === action.payload.id);
      if (item) {
        item.quantity += 1; 
      } else {
        state.items.push({ ...action.payload, quantity: 1 });
      }
      break;
    }

    case REMOVE_FROM_CART: {
      state.items = state.items.filter((item) => item.id !== action.payload);
      break;
    }

    case CLEAR_CART: {
      state.items = [];
      break;
    }

    case INCREMENT_QUANTITY: {
      const item = state.items.find((i) => i.id === action.payload);
      if (item) item.quantity += 1;
      break;
    }

    case DECREMENT_QUANTITY: {
      const item = state.items.find((i) => i.id === action.payload);
      if (item && item.quantity > 1) {
        item.quantity -= 1;
      } else {
        state.items = state.items.filter((i) => i.id !== action.payload);
      }
      break;
    }

    default:
      return state;
  }
}, initialState);


export default cartReducer;
