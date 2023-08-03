import { createSlice } from "@reduxjs/toolkit";
const cartSlice = createSlice({
  // name of the slice
  name: "cart",
  //   initial state
  initialState: {
    items: [],
  },
  //   we write reducer functions here corresponding to the actions
  //   we write reducer functions corresponding to each action
  //   below action is additems and the reducer function
  reducers: {
    addItems: (state, action) => {
      //mutating the state
      state.items.push(action.payload);
    },
    removeItems: (state, action) => {
      state.item.pop();
    },
    clearCart: (state) => {
      state.items.length = 0;
    },
  },
});

// we export our actions
// we default export reducer
export const { addItems, removeItems, clearCart } = cartSlice.actions;
export default cartSlice.reducer;
