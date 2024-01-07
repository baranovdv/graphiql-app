import { describe, expect, test } from 'vitest';
import { renderHook, act } from '@testing-library/react';
import {
  LocaleProvider,
  useLocale,
  useLocaleDispatch,
} from '../context/StoreContext';
import initialStore from '../context/initialStore';
import MockContextStore from './mock/MockContextStore';

describe('StoreContext', () => {
  test('should LocaleProvider provide context correctly', async () => {
    const wrapper = ({ children }: { children: React.ReactNode }) => (
      <LocaleProvider>{children}</LocaleProvider>
    );

    const { result } = renderHook(
      () => {
        const store = useLocale();
        const dispatch = useLocaleDispatch();
        return { store, dispatch };
      },
      { wrapper }
    );

    expect(result.current.store).toEqual(initialStore);

    act(() => {
      result.current.dispatch({
        type: 'change_language',
        payload: 'Ру',
      });
    });

    expect(result.current.store).toEqual(MockContextStore);
  });
});
