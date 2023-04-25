import { configureStore } from "@reduxjs/toolkit";
import clubReducer from "./clubSlice";
import usernameReducer from "./usernameSlice";

export const store = configureStore({
  reducer: {
    club: clubReducer,
    username: usernameReducer,
  },
});
