import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { setCategoryFilter } from "../redux/actions/productActions";

const FilterButtons = () => {
  const dispatch = useDispatch();
  const categoryFilter = useSelector((state) => state.product.categoryFilter);

  const categories = [
    "all",
    "men's clothing",
    "women's clothing",
    "jewelery",
    "electronics",
  ];

  return (
    <div className="mb-3">
      {categories.map((cat) => (
        <button
          key={cat}
          className={`btn me-2 ${
            categoryFilter === cat ? "btn-dark" : "btn-outline-dark"
          }`}
          onClick={() => dispatch(setCategoryFilter(cat))}
        >
          {cat}
        </button>
      ))}
    </div>
  );
};

export default FilterButtons;
