//  import { createSlice } from "@reduxjs/toolkit";
// import productsData from "../../api/products.json";

// const productsSlice = createSlice({
//   name: "products",
//   initialState: {
//     all: productsData,
//     filtered: productsData,
//   },
//   reducers: {
//     filterByCategory: (state, action) => {
//       state.filtered = state.all.filter(
//         (p) => p.category === action.payload
//       );
//     },
//     filterByPrice: (state, action) => {
//       state.filtered = state.all.filter(
//         (p) => p.price <= action.payload
//       );
//     },
//     resetFilters: (state) => {
//       state.filtered = state.all;
//     },
//   },
// });

// export const { filterByCategory, filterByPrice, resetFilters } = productsSlice.actions;
// export default productsSlice.reducer;

import { createSlice } from "@reduxjs/toolkit";
import productsData from "../../api/products.json";

const productsSlice = createSlice({
  name: "products",
  initialState: {
    all: productsData,
    filtered: productsData,
  },
  reducers: {
    filterByCategory: (state, action) => {
      state.filtered = state.all.filter(
        (p) => p.category === action.payload
      );
    },
    filterByPrice: (state, action) => {
      state.filtered = state.all.filter(
        (p) => p.price <= action.payload
      );
    },
    searchProducts: (state, action) => {
      state.filtered = state.all.filter((p) =>
        p.name.toLowerCase().includes(action.payload.toLowerCase())
      );
    },
    resetFilters: (state) => {
      state.filtered = state.all;
    },
  },
});

export const {
  filterByCategory,
  filterByPrice,
  searchProducts,
  resetFilters,
} = productsSlice.actions;

export default productsSlice.reducer;