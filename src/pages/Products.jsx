import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setProducts } from "../redux/actions/productActions";

const Products = () => {
  const dispatch = useDispatch();
  const { allProducts, categoryFilter } = useSelector(state => state.product);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then(res => res.json())
      .then(data => dispatch(setProducts(data)));
  }, [categoryFilter]);

  const filteredProducts = categoryFilter === "all"
    ? allProducts
    : allProducts.filter(p => p.category === categoryFilter);

  return (
    <div className="container">
      <h2>Products</h2>
      <div className="my-3">
        {["all", "men's clothing", "women's clothing", "jewelery", "electronics"].map(cat => (
          <button key={cat} onClick={() => dispatch({ type: "SET_CATEGORY_FILTER", payload: cat })}>
            {cat}
          </button>
        ))}
      </div>

      <div className="row">
        {filteredProducts.map(product => (
          <div key={product.id} className="col-md-3 mb-4">
            <div className="card h-100 text-center">
              <img src={product.image} className="card-img-top p-3" alt={product.title} height="250" />
              <div className="card-body">
                <h6 className="card-title">{product.title}</h6>
                <p className="card-text">${product.price}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Products;
