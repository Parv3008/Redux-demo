import React, { Component } from "react";
import { connect } from "react-redux";
import {
  fetchProducts,
  setCategoryFilter,
} from "../redux/actions/productActions";
import FilterButtonsClass from "../components/FilterButtonsClass";
import ProductCard from "../components/ProductCard";

class Products extends Component {
  componentDidMount() {
    this.props.fetchProducts();
  }

  render() {
    const { allProducts, categoryFilter, loading, setCategoryFilter } =
      this.props;

    const filteredProducts =
      categoryFilter === "all"
        ? allProducts
        : allProducts.filter((product) => product.category === categoryFilter);

    return (
      <div className="container">
        <h2 className="my-4 mt-5 pt-5">Products</h2>

        <FilterButtonsClass
          currentFilter={categoryFilter}
          onFilterChange={setCategoryFilter}
        />

        {loading ? (
          <div
            className="d-flex justify-content-center align-items-center"
            style={{ minHeight: "50vh" }}
          >
            <div className="spinner-border text-primary" role="status">
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
  }
}

const mapStateToProps = (state) => ({
  allProducts: state.product.allProducts,
  categoryFilter: state.product.categoryFilter,
  loading: state.product.loading,
});

const mapDispatchToProps = {
  fetchProducts,
  setCategoryFilter,
};

export default connect(mapStateToProps, mapDispatchToProps)(Products);
