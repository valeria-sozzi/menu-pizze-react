import { configureStore } from "@reduxjs/toolkit";
import pizzaSliceReducer from "./slices/pizzaSlice";
import cartSliceReducer from "./slices/cartSlice";

export default configureStore({
  reducer: {
    pizzas: pizzaSliceReducer,
    cart: cartSliceReducer,
  },
});
