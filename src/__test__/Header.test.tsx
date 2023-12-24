import { test, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { MemoryRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { act } from 'react-dom/test-utils';
import Header from '../components/Header/Header';
import { store } from '../store/store';
import { LocaleProvider } from '../context/StoreContext';

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
  const select: HTMLSelectElement = screen.getByLabelText(
    'label to select language'
  );
  await userEvent.selectOptions(select, 'en');
  expect(select.value).toBe('en');
});

test('отображение текста "Вход не выполнен" при отсутствии пользователя', async () => {
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
  const linkElement = screen.getByText(/Вход не выполнен/i);
  expect(linkElement).toBeInTheDocument();
});
