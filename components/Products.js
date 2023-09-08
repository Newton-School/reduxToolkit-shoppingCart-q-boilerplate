import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { add } from "../features/cartSlice";
import { fetchProducts } from "../features/productSlice";
import { STATUSES } from "../features/productSlice";

const Products = () => {
  useEffect(() => {}, []);

  const handleAdd = () => {};

  if (STATUSES.LOADING) {
    return <h2>Loading....</h2>;
  }

  if (STATUSES.ERROR) {
    return <h2>Something went wrong!</h2>;
  }

  return (
    <div className="productsWrapper">
      {/* {products.map((product) => (
        <div className="card" key="product-id">
          <img src="product-image" alt="" />
          <h4 className="product-title">product-title</h4>
          <h5 className="product-price">$ product-price</h5>
          <button className="btn">Add to cart</button>
        </div>
      ))} */}
    </div>
  );
};

export default Products;
