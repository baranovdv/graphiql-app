import { test } from 'vitest';
import STRINGS_LOCALE from '../data/locales/locales';
import storeReducer from '../context/storeReducer';

const EN = 'en';
const RU = 'ru';

test('storeReducer handles change_language action correctly', () => {
  const initialState = {
    currentLanguage: EN,
    strings: STRINGS_LOCALE[EN],
  };

  const action = {
    type: 'change_language',
    payload: RU,
  };

  const expectedState = {
    ...initialState,
    currentLanguage: RU,
    strings: STRINGS_LOCALE[RU],
  };

  const newState = storeReducer(initialState, action);

  expect(newState).toEqual(expectedState);
});

test('storeReducer throws error for unknown action', () => {
  const initialState = {
    currentLanguage: EN,
    strings: STRINGS_LOCALE[EN],
  };

  const action = {
    type: 'unknown_action',
    payload: RU,
  };

  expect(() => storeReducer(initialState, action)).toThrow(
    `Unknown action: ${action.type}`
  );
});
