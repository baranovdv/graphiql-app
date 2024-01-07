import { describe, test, expect } from 'vitest';
import { fireEvent, render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import { createMemoryRouter, RouterProvider } from 'react-router-dom';
import { store } from '../store/store';
import { LocaleProvider } from '../context/StoreContext';
import { routes } from '../router/router';

describe('<Welcome>', () => {
  test('should render Welcome Page', async () => {
    const testRouter = createMemoryRouter(routes);
    render(
      <Provider store={store}>
        <LocaleProvider>
          <RouterProvider router={testRouter} />
        </LocaleProvider>
      </Provider>
    );

    await screen.findByTestId('login');

    expect(screen.getByTestId('login')).toBeInTheDocument();
    expect(screen.getByTestId('register')).toBeInTheDocument();
  });

  test('should navigate to signin page', async () => {
    const testRouter = createMemoryRouter(routes);
    render(
      <Provider store={store}>
        <LocaleProvider>
          <RouterProvider router={testRouter} />
        </LocaleProvider>
      </Provider>
    );
    await screen.findByTestId('login');

    const loginButton = screen.getByTestId('login');

    fireEvent.click(loginButton);

    const title = await screen.findByRole('heading', { level: 1 });

    expect(title).toHaveTextContent('Вход в Аккаунт');
  });

  test('should navigate to signup page', async () => {
    const testRouter = createMemoryRouter(routes);
    render(
      <Provider store={store}>
        <LocaleProvider>
          <RouterProvider router={testRouter} />
        </LocaleProvider>
      </Provider>
    );
    await screen.findByTestId('register');

    const loginButton = screen.getByTestId('register');

    fireEvent.click(loginButton);

    const title = await screen.findByRole('heading', { level: 1 });

    expect(title).toHaveTextContent('Регистрация');
  });
});
