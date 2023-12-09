import { describe, expect, it } from 'vitest';
import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import { store } from '../store/store';
import Header from '../components/Header/Header';
import { LocaleProvider } from '../context/StoreContext';

/* Test to test the tests. To be modified after adding any content in App */
describe('App', () => {
  it('Renders GraphQL', () => {
    render(
      <Provider store={store}>
        <LocaleProvider>
          <Header />
        </LocaleProvider>
      </Provider>
    );
    expect(
      screen.getByRole('button', {
        name: /выйти/i,
      })
    ).toHaveTextContent('Выйти');
  });
});
