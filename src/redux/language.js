import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  langID: "am",
  businessType: 'individual'
};
export const language = createSlice({
  name: "language",
  initialState,
  reducers: {
    languageRefresh: (state, action) => {
      state.langID = action.payload;
    },
    businessTypeRefresh: (state, action) => {
      state.businessType = action.payload;
    },
  },
});

export const { languageRefresh, businessTypeRefresh } = language.actions;
export default language.reducer;
