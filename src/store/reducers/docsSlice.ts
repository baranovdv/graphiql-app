import { createSlice, PayloadAction } from '@reduxjs/toolkit';

const initialState: {
  searchItemName: string;
} = {
  searchItemName: '',
};

const docsSlice = createSlice({
  name: 'docs',
  initialState,
  reducers: {
    setSearchName: (state, action: PayloadAction<string>) => {
      state.searchItemName = action.payload;
    },
  },
});

export default docsSlice.reducer;

export const { setSearchName } = docsSlice.actions;
