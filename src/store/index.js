import home from "./slices/home";
import { configureStore } from "@reduxjs/toolkit";

export default configureStore({
  reducer: {
    home,
  },
});
