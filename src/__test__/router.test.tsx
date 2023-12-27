import { test, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import { MemoryRouter, useRoutes } from 'react-router-dom';
import { act } from 'react-dom/test-utils';
import { Provider } from 'react-redux';
import { routes } from '../router/router';
import { store } from '../store/store';
import { LocaleProvider } from '../context/StoreContext';

function TestRouter() {
  return useRoutes(routes);
}

test('router renders correct component for each route', async () => {
  await act(async () => {
    render(
      <Provider store={store}>
        <LocaleProvider>
          <MemoryRouter initialEntries={['/']}>
            <TestRouter />
          </MemoryRouter>
        </LocaleProvider>
      </Provider>
    );
  });
  expect(window.location.pathname).toBe('/');
  expect(
    screen.getByRole('heading', {
      name: /наша команда/i,
    })
  ).toBeInTheDocument();

  await act(async () => {
    render(
      <Provider store={store}>
        <LocaleProvider>
          <MemoryRouter initialEntries={['/SignIn']}>
            <TestRouter />
          </MemoryRouter>
        </LocaleProvider>
      </Provider>
    );
  });

  expect(
    screen.getByRole('heading', {
      name: /вход в аккаунт/i,
    })
  ).toBeInTheDocument();

  await act(async () => {
    render(
      <Provider store={store}>
        <LocaleProvider>
          <MemoryRouter initialEntries={['/SignUp']}>
            <TestRouter />
          </MemoryRouter>
        </LocaleProvider>
      </Provider>
    );
  });
  expect(
    screen.getByRole('heading', {
      name: /регистрация/i,
    })
  ).toBeInTheDocument();

  await act(async () => {
    render(
      <Provider store={store}>
        <LocaleProvider>
          <MemoryRouter initialEntries={['/MainPage']}>
            <TestRouter />
          </MemoryRouter>
        </LocaleProvider>
      </Provider>
    );
  });

  await act(async () => {
    render(
      <Provider store={store}>
        <LocaleProvider>
          <MemoryRouter initialEntries={['/non-existent-route']}>
            <TestRouter />
          </MemoryRouter>
        </LocaleProvider>
      </Provider>
    );
  });
  expect(
    screen.getByRole('heading', {
      name: /404/i,
    })
  ).toBeInTheDocument();
});
