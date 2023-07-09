import { createSlice } from "@reduxjs/toolkit";
import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  loading: true,
  error: "",
  products: [],
};

const getInitialState = () => {
  const filter = sessionStorage.getItem("products");
  return filter ? JSON.parse(filter) : initialState;
};

const fetchProducts = createAsyncThunk("products/fetchProducts", async (thunkAPI) => {
  try {
    const response = await axios.get("https://6472db22d784bccb4a3c0da1.mockapi.io/products");
    return response.data;
  } catch (err) {
    return thunkAPI.rejectWithValue(err.message);
  }
});

const productsSlice = createSlice({
  name: "products",
  initialState: getInitialState(),
  extraReducers: (builder) => {
    builder
      .addCase(fetchProducts.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchProducts.fulfilled, (state, action) => {
        state.loading = false;
        state.products = action.payload;
        sessionStorage.setItem("products", JSON.stringify(state));
        state.error = "";
      })
      .addCase(fetchProducts.rejected, (state, action) => {
        state.loading = false;
        state.products = [];
        sessionStorage.setItem("products", JSON.stringify(state));
        state.error = action.error.message;
      });
  },
});

export default productsSlice.reducer;
export { fetchProducts };
