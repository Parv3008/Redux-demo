import { SET_PRODUCTS, SET_CATEGORY_FILTER, SET_LOADING } from "../types/productTypes";

export const setProducts = (products) => ({
  type: SET_PRODUCTS,
  payload: products,
});

export const setCategoryFilter = (category) => ({
  type: SET_CATEGORY_FILTER,
  payload: category,
});

export const setLoading = (status) => ({
  type: SET_LOADING,
  payload: status,
});

export const fetchProducts = () => {
  return async (dispatch) => {
    try {
      dispatch(setLoading(true));
      const response = await fetch("https://fakestoreapi.com/products");
      const data = await response.json();
      dispatch(setProducts(data));
      dispatch(setLoading(false));
    } catch (error) {
      console.error("Error fetching products:", error);
    }
  };
};
