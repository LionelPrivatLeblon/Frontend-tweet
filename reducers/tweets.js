import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: [],
};

export const tweetSlice = createSlice({
  name: "tweet",
  initialState,
  reducers: {
    displayTweet: (state, action) => {
      state.value.push(action.payload);
    },
    removeTweet: (state) => {
      state.value = state.value.filter(
        (tweet) => tweet.title !== action.payload.title
      );
    },
  },
});

export const { displayTweet, removeTweet } = tweetSlice.actions;
export default tweetSlice.reducer;
