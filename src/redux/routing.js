import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  routes: [],
};
export const routes = createSlice({
  name: "routes",
  initialState,
  reducers: {
    routeRefresh: (state, {payload}) => {
      state.routes = payload;
    },
  },
});

export const { routeRefresh } = routes.actions;
export default routes.reducer;
