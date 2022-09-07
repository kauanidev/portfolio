import home from "./slices/home";
import preferences from "./slices/preferences";
import { configureStore } from "@reduxjs/toolkit";

const store = configureStore({
  reducer: {
    home,
    preferences,
  },
});

export default store;

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
