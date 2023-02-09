import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: [],
};

export const bookmarksSlice = createSlice({
  name: "bookmarks",

  initialState,
  reducers: {
    addBookmarksToStore: (state, action) => {
      state.value.push(action.payload);
    },
    removeBookmarksToStore: (state, action) => {
      state.value = state.value.filter((e) => e.title !== action.payload.title);
    },
  },
});

export const { addBookmarksToStore, removeBookmarksToStore } =
  bookmarksSlice.actions;
export default bookmarksSlice.reducer;
