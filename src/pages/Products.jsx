import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts } from "../redux/actions/productActions";
import FilterButtons from "../components/FilterButtons";
import ProductCard from "../components/ProductCard";

const Products = () => {
  const dispatch = useDispatch();
  const { allProducts, categoryFilter, loading } = useSelector(
    (state) => state.product
  );

  useEffect(() => {
    dispatch(fetchProducts());
  },[categoryFilter]);

  const filteredProducts =
    categoryFilter === "all"
      ? allProducts
      : allProducts.filter((product) => product.category === categoryFilter);

  return (
    <div className="container">
      <h2 className="my-4 mt-5 pt-5">Products</h2>
      <FilterButtons />
      {loading ? (
        <div
          className="d-flex justify-content-center align-items-center"
          style={{ minHeight: "50vh" }}
        >
          <div className="spinner-border text-dark" role="status">
            <span className="visually-hidden">Loading...</span>
          </div>
        </div>
      ) : (
        <div className="row">
          {filteredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      )}
    </div>
  );
};

export default Products;
