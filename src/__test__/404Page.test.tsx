import { describe, expect, test } from 'vitest';
import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import userEvent from '@testing-library/user-event';
import Page404 from '../pages/404Page';
import { LocaleProvider } from '../context/StoreContext';

describe('Page404', () => {
  test('renders 404', () => {
    render(
      <LocaleProvider>
        <MemoryRouter>
          <Page404 />
        </MemoryRouter>
      </LocaleProvider>
    );
    expect(screen.getByText(/Ошибка!/i)).toBeInTheDocument();
    expect(screen.getByText(/404/i)).toBeInTheDocument();
    expect(
      screen.getByText(/К сожалению, запрашиваемая вами страница не найдена/i)
    ).toBeInTheDocument();
    expect(screen.getByText(/Главная/i)).toBeInTheDocument();
  });

  test('проверка перехода на главную страницу при нажатии на кнопку', async () => {
    render(
      <LocaleProvider>
        <MemoryRouter>
          <Page404 />
        </MemoryRouter>
      </LocaleProvider>
    );

    const button = screen.getByRole('button');
    await userEvent.click(button);
    expect(window.location.pathname).toBe('/');
  });
});
