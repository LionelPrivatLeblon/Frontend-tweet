import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: [],
};

export const articlesSlice = createSlice({
  name: "hiddenarticles",
  initialState,
  reducers: {
    displayArticle: (state, action) => {
      state.value.push(action.payload);
    },
    hiddeAllArticle: (state) => {
      state.value = [];
    },
  },
});

export const { displayArticle, hiddeAllArticle } = articlesSlice.actions;
export default articlesSlice.reducer;
