import { configureStore, createSlice } from "@reduxjs/toolkit";

// Cart -----------------------------------------------------------------

const cartState = {
  products: [],
  show: false,
};

const cartSlice = createSlice({
  name: "cart",
  initialState: cartState,
  reducers: {
    setCart(state, action) {
      state.products = action.payload;
    },
    toggleCart(state) {
      state.show = !state.show;
    },
  },
});

export const cartSliceActions = cartSlice.actions;

// Product -------------------------------------------------------------------

const storeState = {
  products: [
    {
      name: "Wings of fire",
      category: "Book",
      price: 200,
      id: 1,
    },
    {
      name: "Humpty Dumpty",
      category: "Toy",
      price: 100,
      id: 2,
    },
    {
      name: "Mouse",
      category: "Electronics",
      price: 800,
      id: 3,
    },
  ],
};

const storeSlice = createSlice({
  name: "store",
  initialState: storeState,
  reducers: {
    setStore(state, action) {
      state.products = action.payload;
    },
  },
});

export const storeSliceActions = storeSlice.actions;

// Store ---------------------------------------------------------------------

const store = configureStore({
  reducer: { cart: cartSlice.reducer, store: storeSlice.reducer },
});

export default store;
