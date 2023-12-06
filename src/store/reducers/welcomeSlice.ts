import { createSlice, PayloadAction } from '@reduxjs/toolkit';

const initialState: {
  loggedIn: boolean;
} = { loggedIn: false };

export const welcomeSlice = createSlice({
  name: 'welcomeData',
  initialState,
  reducers: {
    setStatus(state, action: PayloadAction<boolean>) {
      state.loggedIn = action.payload;
    },
  },
});

export default welcomeSlice.reducer;
export const { setStatus } = welcomeSlice.actions;
