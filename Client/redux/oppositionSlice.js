import { createSlice } from "@reduxjs/toolkit";
const initialState = false;
export const oppositionSlice = createSlice({
  name: "opposition",
  initialState,
  reducers: {
    setOpposition: (_, action) => {
      console.log("is this a opposition: ", action.payload);
      return action.payload;
    },
    toggle: (state) => !state,
  },
});
export const { toggle, setOpposition } = oppositionSlice.actions;
export default oppositionSlice.reducer;
