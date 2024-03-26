import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const filtersCategories = createAsyncThunk(
  "categories/filtersCategories",
  async (slug: string) => {
    const response = await axios.get(
      "http://localhost:3100/categories/filters?slug=" + slug
    );
    const data = await response.data;
    return data;
  }
);
