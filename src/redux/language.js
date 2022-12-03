import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  langID: "am",
};
export const language = createSlice({
  name: "language",
  initialState,
  reducers: {
    languageRefresh: (state, action) => {
      state.langID = action.payload;
    },
  },
});

export const { languageRefresh } = language.actions;
export default language.reducer;
