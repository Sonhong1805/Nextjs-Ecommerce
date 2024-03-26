import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const filtersProducts = createAsyncThunk(
  "products/filtersProducts",
  async ({
    idParent,
    idChildren,
  }: {
    idParent?: string;
    idChildren?: string;
  }) => {
    const response = await axios.get(
      `http://localhost:3100/products/filters?${
        idParent && "idParent=" + idParent
      }&${idChildren && "idChildren=" + idChildren}`
    );
    const data = await response.data;
    return data;
  }
);
