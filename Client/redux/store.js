import { configureStore } from "@reduxjs/toolkit";
import clubReducer from "./clubSlice";
// import oppositionReducer from "./oppositionSlice";

export const store = configureStore({
  reducer: {
    club: clubReducer,
    // opposition: oppositionReducer,
  },
});
