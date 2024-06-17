import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  stage: 0,
  level: 0,
  check: false,
};

const formSlice = createSlice({
  name: "form",
  initialState,
  reducers: {
    setStage(state, action) {
      state.stage = action.payload;
    },
    setLevel(state, action) {
      state.level = action.payload;
    },
    setCheck(state, action) {
      state.check = action.payload;
    },
  },
});

export default formSlice.reducer;

export const { setStage, setLevel, setCheck } = formSlice.actions;
