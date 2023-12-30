import { test, expect } from 'vitest';
import { fireEvent, render, screen } from '@testing-library/react';
import {
  createMemoryRouter,
  MemoryRouter,
  RouterProvider,
} from 'react-router-dom';
import { Provider } from 'react-redux';
import { act } from 'react-dom/test-utils';
import Header from '../components/Header/Header';
import { store } from '../store/store';
import { LocaleProvider } from '../context/StoreContext';
import { routes } from '../router/router';

test('проверка отображения логотипа', async () => {
  await act(async () => {
    render(
      <Provider store={store}>
        <LocaleProvider>
          <MemoryRouter>
            <Header />
          </MemoryRouter>
        </LocaleProvider>
      </Provider>
    );
  });
  const logo = screen.getByAltText('logo');
  expect(logo).toBeInTheDocument();
});

test('проверка изменения класса при прокрутке', async () => {
  await act(async () => {
    render(
      <Provider store={store}>
        <LocaleProvider>
          <MemoryRouter>
            <Header />
          </MemoryRouter>
        </LocaleProvider>
      </Provider>
    );
  });
  expect((document.querySelector('header') as HTMLElement).className).toBe('');
  Object.defineProperty(window, 'pageYOffset', { value: 500 });
  await act(async () => {
    window.dispatchEvent(new Event('scroll'));
  });
  await new Promise((r) => {
    setTimeout(r, 3000);
  });
  expect((document.querySelector('header') as HTMLElement).className).toBe('');
});

test('проверка переключения языка', async () => {
  const testRouter = createMemoryRouter(routes);
  await act(async () => {
    render(
      <Provider store={store}>
        <LocaleProvider>
          <RouterProvider router={testRouter} />
        </LocaleProvider>
      </Provider>
    );
  });
  const langChangeButton = await screen.findByTestId('lang-change');

  fireEvent.click(langChangeButton);

  const title = await screen.findByRole('heading', { level: 1 });

  expect(title).toHaveTextContent('Welcome to GraphQL Application by');
});
