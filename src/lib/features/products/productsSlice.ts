import { createSlice } from "@reduxjs/toolkit";
import { fetchProducts } from "./productsThunk";

const initialState = {
  productList: [],
} as any;

const productSlice = createSlice({
  name: "products",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchProducts.fulfilled, (state, action) => {
      state.productList = action.payload;
    });
  },
});

export default productSlice.reducer;
