import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchProductsDetail = createAsyncThunk(
  "products/fetchProductsDetail",
  async (detail: string) => {
    const response = await axios.get(
      `http://localhost:3100/products/detail?detail=${detail}`
    );
    const data = await response.data;
    return data;
  }
);
