import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: 0,
};

export const numberSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    addNumberToStore: (state, action) => {
      //state.value.push(action.payload);
      console.log(state);
      state.value++;
    },
    reduceNumberToStore: (state, action) => {
      //state.value.push(action.payload);

      if (state.value > 0) {
        state.value--;
      }
    },
  },
});

export const { addNumberToStore, reduceNumberToStore } = numberSlice.actions;
export default numberSlice.reducer;
