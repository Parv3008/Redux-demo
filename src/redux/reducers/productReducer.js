import { produce } from "immer";
import {
  SET_PRODUCTS,
  SET_CATEGORY_FILTER,
  SET_LOADING,
} from "../types/productTypes";

const initialState = {
  allProducts: [],
  categoryFilter: "all",
  loading: false,
};

const productReducer = produce((state = initialState, action) => {
  switch (action.type) {
    case SET_PRODUCTS:
      state.allProducts = action.payload;
      break;
    case SET_CATEGORY_FILTER:
      state.categoryFilter = action.payload;
      break;
    case SET_LOADING:
      state.loading = action.payload;
      break;
    default:
      return state;
  }
}, initialState);

export default productReducer;
