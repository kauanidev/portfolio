import { createSlice } from "@reduxjs/toolkit";

const THEME_KEY = "kaudev:theme";
const storagedTheme = localStorage.getItem(THEME_KEY) ?? "dark";

export const preferencesSlice = createSlice({
  name: "preferences",
  initialState: {
    currentTheme: storagedTheme,
  },
  reducers: {
    toggleTheme: (state) => {
      const newTheme = state.currentTheme === "dark" ? "light" : "dark";
      state.currentTheme = newTheme;
      localStorage.setItem(THEME_KEY, newTheme);
    },
  },
});

export const { toggleTheme } = preferencesSlice.actions;

export default preferencesSlice.reducer;
