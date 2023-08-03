import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./cartSlice";
const Appstore = configureStore({
  // reducer is to modify appstore
  reducer: {
    cart:cartReducer,
  },
});
export default Appstore;
