import { test, expect } from 'vitest';
import reducer, {
  setUrl,
  setInput,
  setVars,
  setResponse,
  setHeaders,
} from '../store/reducers/mainPageSlice';

test('MainPageData reducer', () => {
  let state = reducer(undefined, { type: 'unknown' });

  const url = 'https://newapi.com/graphql';
  const input = 'new query';
  const vars = 'new vars';
  const headers = 'new headers';
  const response = 'new response';

  state = reducer(state, setUrl(url));
  expect(state.url).toBe(url);

  state = reducer(state, setInput(input));
  expect(state.input).toBe(input);

  state = reducer(state, setVars(vars));
  expect(state.vars).toBe(vars);

  state = reducer(state, setHeaders(headers));
  expect(state.headers).toBe(headers);

  state = reducer(state, setResponse(response));
  expect(state.response).toBe(response);
});
