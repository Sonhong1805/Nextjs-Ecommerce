import { createSlice } from "@reduxjs/toolkit";
import { filtersProducts } from "./filtersThunk";

const initialState = {
  productList: [],
  productsChecked: [],
} as any;

const filtersSlice = createSlice({
  name: "filtersCategory",
  initialState,
  reducers: {
    setProductsChecked(state, action) {
      const index = state.productsChecked.indexOf(action.payload);
      if (index !== -1) {
        state.productsChecked.splice(index, 1);
      } else {
        state.productsChecked.push(action.payload);
      }
    },
  },
  extraReducers: (builder) => {
    builder.addCase(filtersProducts.fulfilled, (state, action) => {
      state.productList = action.payload || [];
    });
  },
});

export const { setProductsChecked } = filtersSlice.actions;
export default filtersSlice.reducer;
