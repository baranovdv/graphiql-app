import { describe, expect, it } from 'vitest';
import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import { RouterProvider } from 'react-router-dom';
import { store } from '../store/store';
import { LocaleProvider } from '../context/StoreContext';
import router from '../router/router';

/* Test to test the tests. To be modified after adding any content in App */
describe('App', () => {
  it('Renders GraphQL', () => {
    screen.debug();
    render(
      <Provider store={store}>
        <LocaleProvider>
          <RouterProvider router={router} />
        </LocaleProvider>
      </Provider>
    );
    expect(screen.getByAltText('logo')).toBeInTheDocument();
  });
});
