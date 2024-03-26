import { configureStore } from "@reduxjs/toolkit";
import categoryReducer from "./features/categories/categoriesSlice";
import filterCategoryReducer from "./features/filtersCategory/filtersSlice";
import filterProductReducer from "./features/filtersProduct/filtersSlice";

export const makeStore = () => {
  return configureStore({
    reducer: {
      categories: categoryReducer,
      filtersCategory: filterCategoryReducer,
      filtersProducts: filterProductReducer,
    },
  });
};

// Infer the type of makeStore
export type AppStore = ReturnType<typeof makeStore>;
// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<AppStore["getState"]>;
export type AppDispatch = AppStore["dispatch"];
