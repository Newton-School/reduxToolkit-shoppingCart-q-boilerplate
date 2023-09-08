import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./features/cartSlice";
import productReducer from "./features/productSlice";

const store = configureStore({
  reducer: {},
});

export default store;
