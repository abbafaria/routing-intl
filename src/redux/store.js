import { combineReducers, configureStore } from "@reduxjs/toolkit";
import language from "./language";

export const store = configureStore({
  reducer: combineReducers({
    language: language,
  }),
});
