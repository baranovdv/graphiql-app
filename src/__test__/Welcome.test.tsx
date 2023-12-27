import { expect, test } from 'vitest';
import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import { MemoryRouter } from 'react-router-dom';
import { act } from 'react-dom/test-utils';
import { store } from '../store/store';
import Welcome from '../pages/Welcome';
import { LocaleProvider } from '../context/StoreContext';

test('Welcome component renders correctly', async () => {
  await act(async () => {
    render(
      <Provider store={store}>
        <LocaleProvider>
          <MemoryRouter>
            <Welcome />
          </MemoryRouter>
        </LocaleProvider>
      </Provider>
    );
  });

  expect(
    screen.getByRole('link', { name: /регистрация/i })
  ).toBeInTheDocument();
  expect(screen.getByRole('link', { name: /войти/i })).toBeInTheDocument();

  expect(
    screen.getByRole('link', { name: /регистрация/i }).closest('a')
  ).toHaveAttribute('href', '/SignUp');
  expect(
    screen.getByRole('link', { name: /войти/i }).closest('a')
  ).toHaveAttribute('href', '/SignIn');
});
