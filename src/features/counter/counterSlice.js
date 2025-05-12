import { createSlice } from '@reduxjs/toolkit';

export const counterSlice = createSlice({
  name: 'counter',
  initialState: {
    value: 0,
    step: 1,
    history: [0]
  },
  reducers: {
    increment: (state) => {
      state.value += state.step;
      state.history.push(state.value);
    },
    decrement: (state) => {
      state.value -= state.step;
      state.history.push(state.value);
    },
    reset: (state) => {
      state.value = 0;
      state.history.push(state.value);
    },
    setStep: (state, action) => {
      state.step = action.payload;
    },
    clearHistory: (state) => {
      state.history = [state.value];
    },
  },
});

export const { increment, decrement, reset, setStep, clearHistory } = counterSlice.actions;

export default counterSlice.reducer;
