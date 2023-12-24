import { createSlice, PayloadAction } from '@reduxjs/toolkit';

const initialState: {
  url: string;
  input: string;
  vars: string;
  headers: string;
  response: string;
  docs: string;
} = {
  url: 'https://rickandmortyapi.com/graphql',
  input:
    'query($page:Int, $filter:FilterCharacter){\n  characters(page:$page,filter:$filter) {\n            results {\n              id\n              name\n              status\n            }\n        }  \n}',
  vars: '{\n "page": 1,\n  "filter": {\n  "name": "Rick"\n  }\n}',
  headers: '',
  response: '',
  docs: 'Docs',
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
    setDocs(state, action: PayloadAction<string>): void {
      state.docs = action.payload;
    },
  },
});

export default MainPageDataSlice.reducer;
export const { setUrl, setInput, setVars, setResponse, setHeaders, setDocs } =
  MainPageDataSlice.actions;
