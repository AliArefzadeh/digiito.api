import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  input: "",
  category: "all",
  brands: [],
  priceRange: { min: 0, max: 100 },
  colors: [],
};

const getInitialState = () => {
  const filter = sessionStorage.getItem("filters");
  return filter ? JSON.parse(filter) : initialState;
};

const filtersSilce = createSlice({
  name: "filters",
  initialState: getInitialState(),
  reducers: {
    searchInput: (state, action) => {
      state.input = action.payload;
      sessionStorage.setItem("filters", JSON.stringify(state));
    },
    categories: (state, action) => {
      state.category = action.payload;
      sessionStorage.setItem("filters", JSON.stringify(state));
    },
    colors: (state, action) => {
      action.payload.check ? state.colors.push(action.payload.name) : (state.colors = state.colors.filter((item) => item !== action.payload.name));
      sessionStorage.setItem("filters", JSON.stringify(state));
    },
    brands: (state, action) => {
      action.payload.check ? state.brands.push(action.payload.name) : (state.brands = state.brands.filter((item) => item !== action.payload.name));
      sessionStorage.setItem("filters", JSON.stringify(state));
    },
    price: (state, action) => {
      state.priceRange = { min: action.payload.min, max: action.payload.max };
      sessionStorage.setItem("filters", JSON.stringify(state));
    },
    clear: (state) => {
      state.input = "";
      state.category = "all";
      state.brands = [];
      state.priceRange = { min: 0, max: 100 };
      state.colors = [];
    },
  },
});

export default filtersSilce.reducer;
export const { searchInput, categories, colors, brands, price, clear } = filtersSilce.actions;
