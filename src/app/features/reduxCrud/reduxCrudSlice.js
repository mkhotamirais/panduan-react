import { createSlice } from "@reduxjs/toolkit";

// const createdAt = new Date().toISOString();
// const updatedAt = new Date().toISOString();
// const initialState = [
//   { id: "1", name: "produk1", price: 2000, description: "produk 1 deskripsi", createdAt, updatedAt },
//   { id: "2", name: "produk2", price: 2000, description: "produk 1 deskripsi2", createdAt, updatedAt },
//   { id: "3", name: "produk3", price: 2000, description: "produk 1 deskripsi3", createdAt, updatedAt },
// ];

const initialState = JSON.parse(localStorage.getItem("product")) || [];

const reduxCrudSlice = createSlice({
  name: "reduxCrud",
  initialState,
  reducers: {
    postProduct(state, action) {
      state.push(action.payload);
      localStorage.setItem("product", JSON.stringify(state));
    },
    deleteProduct(state, action) {
      const find = state.find((p) => p.id === action.payload);
      const index = state.indexOf(find);
      state.splice(index, 1);
      localStorage.setItem("product", JSON.stringify(state));
    },
    updateProduct(state, action) {
      const { id, name, price, description, updatedAt } = action.payload;
      const match = state.find((p) => p.id === id);
      if (match) {
        match.name = name;
        match.price = price;
        match.description = description;
        match.updatedAt = updatedAt;
      }
      localStorage.setItem("product", JSON.stringify(state));
    },
  },
});

export const { postProduct, deleteProduct, updateProduct } = reduxCrudSlice.actions;

export default reduxCrudSlice.reducer;
