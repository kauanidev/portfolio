import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface HomeState {
  currentSection: "portfólio" | "skills";
}

const initialState: HomeState = {
  currentSection: "portfólio",
};

export const homeSlice = createSlice({
  name: "home",
  initialState,
  reducers: {
    setCurrentSection: (
      state,
      action: PayloadAction<"portfólio" | "skills">
    ) => {
      state.currentSection = action.payload;
    },
  },
});

export const { setCurrentSection } = homeSlice.actions;

export default homeSlice.reducer;
