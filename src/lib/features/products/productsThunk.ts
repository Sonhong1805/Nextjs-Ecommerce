import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchProducts = createAsyncThunk(
  "products/fetchproducts",
  async () => {
    const response = await axios.get("http://localhost:3100/products");
    const data = await response.data;
    return data;
  }
);
