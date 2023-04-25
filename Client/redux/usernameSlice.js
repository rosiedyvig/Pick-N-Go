import { createSlice } from "@reduxjs/toolkit";
const initialState = "";
export const usernameSlice = createSlice({
  name: "username",
  initialState,
  reducers: {
    setUsername: (_, action) => {
      console.log("logged in now is: ", action.payload);
      return action.payload;
    },
  },
});
export const { setUsername } = usernameSlice.actions;
export default usernameSlice.reducer;
