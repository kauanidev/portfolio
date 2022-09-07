import { createSlice } from "@reduxjs/toolkit";

type ThemeKey = "dark" | "light";

interface PreferencesState {
  currentTheme: ThemeKey;
}

const THEME_KEY = "kaudev:theme";
const storagedTheme = (localStorage.getItem(THEME_KEY) ?? "dark") as ThemeKey;

const initialState: PreferencesState = {
  currentTheme: storagedTheme,
};

export const preferencesSlice = createSlice({
  name: "preferences",
  initialState,
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
