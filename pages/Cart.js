import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { remove } from "../features/cartSlice";

const Cart = () => {
  const handleRemove = (productId) => {};

  return (
    <div>
      <h3>Cart</h3>
      {!products.length ? (
        <div>You haven't added any product in the cart.</div>
      ) : (
        <div className="cartWrapper">
          {/* {products.map((product) => (
            <div key="product-id" className="cartCard">
              <img src="product-image" alt="" />
              <h5 className="product-title">product-title</h5>
              <h5 className="product-price">product-price</h5>
              <button className="btn">Remove</button>
            </div>
          ))} */}
        </div>
      )}
    </div>
  );
};

export default Cart;
