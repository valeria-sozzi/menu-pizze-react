import { createSlice } from "@reduxjs/toolkit";

export const cartSlice = createSlice({
  name: "cart",
  initialState: {
    pizzasCart: [],
    totalPrice: 0,
  },
  reducers: {
    addPizza: (state, action) => {
      state.pizzasCart.push(action.payload);
      state.totalPrice += action.payload.price;
    },
  },
});

export const { addPizza } = cartSlice.actions;

export default cartSlice.reducer;
