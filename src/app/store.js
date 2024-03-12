import { configureStore } from "@reduxjs/toolkit";
import collapseReducer from "./features/collapseSlice";
import reduxCrudReducer from "./features/reduxCrud/reduxCrudSlice";

export const store = configureStore({
  reducer: {
    collapse: collapseReducer,
    reduxCrud: reduxCrudReducer,
  },
});
