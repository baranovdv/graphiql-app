import { createSlice, PayloadAction } from '@reduxjs/toolkit';

const initialState: {
  url: string;
  input: string;
  vars: string;
  headers: string;
  response: string;
} = {
  url: 'https://rickandmortyapi.com/graphql',
  input:
    'characters {\n            results {\n              id\n              name\n              status\n            }\n        }',
  vars: '',
  headers: '',
  response: '',
};

export const MainPageDataSlice = createSlice({
  name: 'MainPageData',
  initialState,
  reducers: {
    setUrl(state, action: PayloadAction<string>): void {
      state.url = action.payload;
    },
    setInput(state, action: PayloadAction<string>): void {
      state.input = action.payload;
    },
    setResponse(state, action: PayloadAction<string>): void {
      state.response = action.payload;
    },
    setVars(state, action: PayloadAction<string>): void {
      state.vars = action.payload;
    },
    setHeaders(state, action: PayloadAction<string>): void {
      state.headers = action.payload;
    },
  },
});

export default MainPageDataSlice.reducer;
export const { setUrl, setInput, setVars, setResponse, setHeaders } =
  MainPageDataSlice.actions;
