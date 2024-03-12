import { createSlice } from "@reduxjs/toolkit";

const reduxCrud2Slice = createSlice({
  name: "reduxCrud2",
  initialState: {
    sort: "createdAt",
  },
  reducers: {
    setSort(state, action) {
      state.sort = action.payload;
    },
  },
});

export const { setSort } = reduxCrud2Slice.actions;

export default reduxCrud2Slice.reducer;
