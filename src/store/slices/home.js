import { createSlice } from "@reduxjs/toolkit";

export const homeSlice = createSlice({
  name: "home",
  initialState: {
    currentSection: "portfólio",
  },
  reducers: {
    setCurrentSection: (state, action) => {
      state.currentSection = action.payload;
    },
  },
});

export const { setCurrentSection } = homeSlice.actions;

export default homeSlice.reducer;
