import { configureStore } from "@reduxjs/toolkit";
import collapseReducer from "./features/collapseSlice";
import reduxCrudReducer from "./features/reduxCrud/reduxCrudSlice";
import reduxCrudA2Reducer from "./features/reduxCrud/reduxCrudA2Slice";

export const store = configureStore({
  reducer: {
    collapse: collapseReducer,
    reduxCrud: reduxCrudReducer,
    reduxCrud2: reduxCrudA2Reducer,
  },
});
