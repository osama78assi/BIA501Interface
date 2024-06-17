import { configureStore } from "@reduxjs/toolkit";
import formSlice from "./stateSlices/formSlice";
import graphSlice from "./stateSlices/graphSlice";
import trucksSlice from "./stateSlices/trucksSlice";

const store = configureStore({
  reducer: {
    graph: graphSlice,
    trucks: trucksSlice,
    form: formSlice,
  },
});

export default store;
