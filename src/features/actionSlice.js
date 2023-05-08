import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  modalVisibleDark: false,
};

const actionSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    ToggleSunMoon: (state) => {
      state.modalVisibleDark = !state.modalVisibleDark;
    },
  },
});

export const { ToggleSunMoon } = actionSlice.actions;
export default actionSlice.reducer;
