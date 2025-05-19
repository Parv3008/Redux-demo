import React from "react";

const FilterButtonsClass = ({ currentFilter, onFilterChange }) => {
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
            currentFilter === cat ? "btn-primary" : "btn-outline-primary"
          }`}
          onClick={() => onFilterChange(cat)}
        >
          {cat}
        </button>
      ))}
    </div>
  );
};

export default FilterButtonsClass;
