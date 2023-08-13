import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  selectedItems: [],
  total: 0,
  checkout: false,
  itemsCounter: 0,
};

const sumItems = (data) => {
  const itemsCounter = data.reduce((total, product) => total + product.quantity, 0);
  let total = data.reduce((total, product) => total + product.quantity * product.price, 0).toFixed(2);
  return { itemsCounter, total };
};

const getInitialState = () => {
  const cart = localStorage.getItem("cart");
  return cart ? JSON.parse(cart) : initialState;
};

const cartSlice = createSlice({
  name: "cart",
  initialState: getInitialState(),
  reducers: {
    addItems: (state, action) => {
      state.selectedItems.push({
        ...action.payload,
        quantity: 1,
      });

      state.total = sumItems(state.selectedItems).total;
      state.itemsCounter = sumItems(state.selectedItems).itemsCounter;
      state.checkout = false;
      localStorage.setItem("cart", JSON.stringify(state));
    },

    increase: (state, action) => {
      const index = state.selectedItems.findIndex((item) => item.id === action.payload.id && item.color === action.payload.color);
      state.selectedItems[index].quantity++;
      state.total = sumItems(state.selectedItems).total;
      state.itemsCounter = sumItems(state.selectedItems).itemsCounter;
      state.checkout = false;
      localStorage.setItem("cart", JSON.stringify(state));
    },

    decrease: (state, action) => {
      const index = state.selectedItems.findIndex((item) => item.id === action.payload.id && item.color === action.payload.color);
      state.selectedItems[index].quantity--;
      state.total = sumItems(state.selectedItems).total;
      state.itemsCounter = sumItems(state.selectedItems).itemsCounter;
      state.checkout = false;
      localStorage.setItem("cart", JSON.stringify(state));
    },

    remove: (state, action) => {
      const product = state.selectedItems.find((item) => item.id === action.payload.id && item.color === action.payload.color);
      const newSelectedItem = state.selectedItems.filter((item) => item !== product);
      state.selectedItems = newSelectedItem;
      state.total = sumItems(state.selectedItems).total;
      state.itemsCounter = sumItems(state.selectedItems).itemsCounter;
      state.checkout = false;
      localStorage.setItem("cart", JSON.stringify(state));
    },

    checkout: (state) => {
      state.selectedItems = [];
      state.itemsCounter = 0;
      state.total = 0;
      state.checkout = true;
      localStorage.setItem("cart", JSON.stringify(state));
    },
    clear:(state)=>{
      state.selectedItems = [];
      state.itemsCounter = 0;
      state.total = 0;
      state.checkout = false;
      localStorage.setItem("cart", JSON.stringify(state));
    }
  },
});

export default cartSlice.reducer;
export const { checkout, addItems, remove, decrease, increase ,clear } = cartSlice.actions;
