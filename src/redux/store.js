import { combineReducers, configureStore } from "@reduxjs/toolkit";
import language from "./language";
import routes from './routing'

export const store = configureStore({
  reducer: combineReducers({
    language,
    routes
  }),
});
