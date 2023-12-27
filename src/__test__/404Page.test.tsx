import { describe, expect, test } from 'vitest';
import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import userEvent from '@testing-library/user-event';
import Page404 from '../pages/404Page';

describe('Page404', () => {
  test('renders 404', () => {
    render(
      <MemoryRouter>
        <Page404 />
      </MemoryRouter>
    );
    expect(screen.getByText(/Ошибка!/i)).toBeInTheDocument();
    expect(screen.getByText(/404/i)).toBeInTheDocument();
    expect(
      screen.getByText(/К сожалению, запрашиваемая вами страница не найдена/i)
    ).toBeInTheDocument();
    expect(screen.getByText(/НА ГЛАВНУЮ/i)).toBeInTheDocument();
  });

  test('проверка перехода на главную страницу при нажатии на кнопку', async () => {
    render(
      <MemoryRouter>
        <Page404 />
      </MemoryRouter>
    );

    const button = screen.getByRole('button', { name: /на главную/i });
    await userEvent.click(button);
    expect(window.location.pathname).toBe('/');
  });
});
