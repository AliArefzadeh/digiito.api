import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  color: "",
};

const colorSlice = createSlice({
  name: "color",
  initialState,
  reducers: {
    addColor: (state, action) => {
      state.color = action.payload;
    },
    clear: (state) => {
      state.color = "";
    },
  },
});

export default colorSlice.reducer;
export const { clear, addColor } = colorSlice.actions;
