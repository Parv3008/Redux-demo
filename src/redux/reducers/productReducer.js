import { SET_PRODUCTS, SET_CATEGORY_FILTER } from "../types/productTypes";

const initialState = {
  allProducts: [],
  categoryFilter: "all",
};

const productReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_PRODUCTS:
      return { ...state, allProducts: action.payload };
    case SET_CATEGORY_FILTER:
      return { ...state, categoryFilter: action.payload };
    default:
      return state;
  }
};

export default productReducer;
