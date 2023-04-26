import { createSlice } from "@reduxjs/toolkit";
const initialState = "";
export const confirmedFixtureSlice = createSlice({
  name: "confirmedFixture",
  initialState,
  reducers: {
    setConfirmedFixture: (_, action) => {
      console.log("confrimed fixture seet");
      return action.payload;
    },
  },
});
export const { setConfirmedFixture } = confirmedFixtureSlice.actions;
export default confirmedFixtureSlice.reducer;
