import { describe, expect, it } from 'vitest';
import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import { store } from '../store/store';
import Header from '../companets/Header';

/* Test to test the tests. To be modified after adding any content in App */
describe('App', () => {
  it('Renders GraphQL', () => {
    render(
      <Provider store={store}>
        <Header />
      </Provider>
    );
    expect(
      screen.getByRole('button', {
        name: /выйти/i,
      })
    ).toHaveTextContent('выйти');
  });
});
