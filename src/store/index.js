import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  mode: "light",
};

export const stateSlice = createSlice({
  name: "state",
  initialState,
  reducers: {
    setMode: (state) => {
      state.mode = state.mode === "light" ? "dark" : "light";
    },
  },
});

export const { setMode } = stateSlice.actions;
export default stateSlice.reducer;
