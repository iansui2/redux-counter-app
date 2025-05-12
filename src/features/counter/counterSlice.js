import { createSlice } from '@reduxjs/toolkit';

export const counterSlice = createSlice({
  name: 'counter',
  initialState: {
    value: 0,
    step: 1,
  },
  reducers: {
    increment: (state) => {
      state.value += state.step;
    },
    decrement: (state) => {
      state.value -= state.step;
    },
    reset: (state) => {
      state.value = 0;
    },
    setStep: (state, action) => {
      state.step = action.payload;
    },
  },
});

export const { increment, decrement, reset, setStep } = counterSlice.actions;

export default counterSlice.reducer;
