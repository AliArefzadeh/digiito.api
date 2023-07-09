import { configureStore } from "@reduxjs/toolkit";

//Reducers
import productsReducer from "../features/productsSlice";
import filtersReducer from "../features/filtersSlice";
import cartReducer from "../features/cartSlice";
import colorReducer from "../features/colorSelectedSlice";

const store = configureStore({
  reducer: {
    products: productsReducer,
    filters: filtersReducer,
    cart: cartReducer,
    color: colorReducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware(),
});

export default store;
