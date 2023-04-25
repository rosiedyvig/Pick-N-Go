import { createSlice } from "@reduxjs/toolkit";
const initialState = false;
export const clubSlice = createSlice({
  name: "club",
  initialState,
  reducers: {
    setClub: (_, action) => {
      console.log("is this a club: ", action.payload);
      return action.payload;
    },
    toggle: (state) => !state,
  },
});
export const { toggle, setClub } = clubSlice.actions;
export default clubSlice.reducer;
