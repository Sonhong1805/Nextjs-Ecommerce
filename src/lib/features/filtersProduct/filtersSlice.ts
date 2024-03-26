import { createSlice } from "@reduxjs/toolkit";
import { filtersProducts } from "./filtersThunk";

const initialState = {
  productList: [],
} as any;

const filtersSlice = createSlice({
  name: "filtersCategory",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(filtersProducts.fulfilled, (state, action) => {
      state.productList = action.payload;
    });
  },
});

export default filtersSlice.reducer;
