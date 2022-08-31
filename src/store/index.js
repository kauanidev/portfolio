import home from "./slices/home";
import preferences from "./slices/preferences";
import { configureStore } from "@reduxjs/toolkit";

export default configureStore({
  reducer: {
    home,
    preferences,
  },
});
