import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: 0,
};

const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    increment(state) {
      state.value++;
    },
    addAmount(state, action) {
      state.value += action.payload;
    },
  },
});

export const { increment, addAmount } = counterSlice.actions;
export default counterSlice.reducer;