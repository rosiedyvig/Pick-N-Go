import { configureStore } from "@reduxjs/toolkit";
import clubReducer from "./clubSlice";
import usernameReducer from "./usernameSlice";
import confirmedFixtureReducer from "./confirmedFixturesSlice";

export const store = configureStore({
  reducer: {
    club: clubReducer,
    username: usernameReducer,
    confirmedFixture: confirmedFixtureReducer,
  },
});
